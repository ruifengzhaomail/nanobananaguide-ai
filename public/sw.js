// Service Worker for Nano Banana AI Guide
// 版本号用于缓存更新
const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;

// 需要预缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/guide/what-is-nano-banana',
  '/tutorials/get-started',
  '/compare',
  '/cases',
  '/manifest.json',
  '/favicon.ico'
];

// 缓存策略配置
const CACHE_STRATEGIES = {
  // 静态资源：缓存优先
  static: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30天
    maxEntries: 100
  },
  // 动态内容：网络优先，缓存备用
  dynamic: {
    maxAge: 24 * 60 * 60 * 1000, // 1天
    maxEntries: 50
  },
  // 图片资源：缓存优先
  images: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7天
    maxEntries: 200
  }
};

// Service Worker 安装事件
self.addEventListener('install', (event) => {
  console.log('SW: Installing Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('SW: Precaching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // 强制激活新的 Service Worker
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('SW: Precaching failed:', error);
      })
  );
});

// Service Worker 激活事件
self.addEventListener('activate', (event) => {
  console.log('SW: Activating Service Worker');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // 删除旧版本的缓存
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // 立即控制所有客户端
        return self.clients.claim();
      })
  );
});

// 网络请求拦截
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 只处理同源请求
  if (url.origin !== location.origin) {
    return;
  }
  
  // 根据请求类型选择缓存策略
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isStaticAsset(request)) {
    event.respondWith(handleStaticRequest(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});

// 判断是否为图片请求
function isImageRequest(request) {
  return request.destination === 'image' || 
         /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(request.url);
}

// 判断是否为静态资源
function isStaticAsset(request) {
  return request.destination === 'script' ||
         request.destination === 'style' ||
         /\.(js|css|woff|woff2|ttf|eot)$/i.test(request.url);
}

// 判断是否为API请求
function isAPIRequest(request) {
  return request.url.includes('/api/') || 
         request.url.includes('fal.ai');
}

// 处理图片请求 - 缓存优先策略
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // 检查缓存是否过期
      const cacheDate = new Date(cachedResponse.headers.get('sw-cache-date'));
      const now = new Date();
      
      if (now - cacheDate < CACHE_STRATEGIES.images.maxAge) {
        return cachedResponse;
      }
    }
    
    // 从网络获取
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // 克隆响应并添加缓存时间戳
      const responseToCache = networkResponse.clone();
      const headers = new Headers(responseToCache.headers);
      headers.set('sw-cache-date', new Date().toISOString());
      
      const modifiedResponse = new Response(responseToCache.body, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
      });
      
      // 缓存响应
      await cache.put(request, modifiedResponse.clone());
      
      // 清理过期缓存
      await cleanupCache(cache, CACHE_STRATEGIES.images.maxEntries);
      
      return networkResponse;
    }
    
    // 网络失败，返回缓存（即使过期）
    return cachedResponse || new Response('Image not found', { status: 404 });
    
  } catch (error) {
    console.error('SW: Image request failed:', error);
    return new Response('Image not available', { status: 503 });
  }
}

// 处理静态资源请求 - 缓存优先策略
async function handleStaticRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // 后台更新缓存
      fetch(request)
        .then(response => {
          if (response.ok) {
            cache.put(request, response.clone());
          }
        })
        .catch(() => {});
      
      return cachedResponse;
    }
    
    // 从网络获取并缓存
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.error('SW: Static request failed:', error);
    return new Response('Resource not available', { status: 503 });
  }
}

// 处理API请求 - 网络优先策略
async function handleAPIRequest(request) {
  try {
    // 尝试网络请求
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // 对于GET请求，缓存响应
      if (request.method === 'GET') {
        const cache = await caches.open(DYNAMIC_CACHE);
        await cache.put(request, networkResponse.clone());
      }
    }
    
    return networkResponse;
    
  } catch (error) {
    console.error('SW: API request failed:', error);
    
    // 网络失败，尝试从缓存获取
    if (request.method === 'GET') {
      const cache = await caches.open(DYNAMIC_CACHE);
      const cachedResponse = await cache.match(request);
      
      if (cachedResponse) {
        return cachedResponse;
      }
    }
    
    return new Response('API not available', { status: 503 });
  }
}

// 处理动态内容请求 - 网络优先，缓存备用
async function handleDynamicRequest(request) {
  try {
    // 尝试网络请求
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // 缓存成功的响应
      const cache = await caches.open(DYNAMIC_CACHE);
      const headers = new Headers(networkResponse.headers);
      headers.set('sw-cache-date', new Date().toISOString());
      
      const responseToCache = new Response(networkResponse.body, {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers: headers
      });
      
      await cache.put(request, responseToCache.clone());
      
      // 清理过期缓存
      await cleanupCache(cache, CACHE_STRATEGIES.dynamic.maxEntries);
    }
    
    return networkResponse;
    
  } catch (error) {
    console.error('SW: Dynamic request failed:', error);
    
    // 网络失败，尝试从缓存获取
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // 返回离线页面或错误页面
    return new Response('Page not available offline', {
      status: 503,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// 清理过期缓存
async function cleanupCache(cache, maxEntries) {
  const keys = await cache.keys();
  
  if (keys.length > maxEntries) {
    // 获取所有缓存项及其时间戳
    const cacheItems = await Promise.all(
      keys.map(async (key) => {
        const response = await cache.match(key);
        const cacheDate = response.headers.get('sw-cache-date');
        return {
          key,
          date: cacheDate ? new Date(cacheDate) : new Date(0)
        };
      })
    );
    
    // 按时间排序，删除最旧的项
    cacheItems.sort((a, b) => a.date - b.date);
    const itemsToDelete = cacheItems.slice(0, keys.length - maxEntries);
    
    await Promise.all(
      itemsToDelete.map(item => cache.delete(item.key))
    );
  }
}

// 后台同步事件
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// 执行后台同步
async function doBackgroundSync() {
  try {
    // 这里可以添加后台同步逻辑
    // 例如：同步离线时的用户操作、更新缓存等
    console.log('SW: Background sync completed');
  } catch (error) {
    console.error('SW: Background sync failed:', error);
  }
}

// 推送通知事件
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: '查看详情',
          icon: '/icon-explore.png'
        },
        {
          action: 'close',
          title: '关闭',
          icon: '/icon-close.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// 通知点击事件
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    // 打开相关页面
    event.waitUntil(
      clients.openWindow('/guide/what-is-nano-banana')
    );
  }
});

// 消息事件处理
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
});