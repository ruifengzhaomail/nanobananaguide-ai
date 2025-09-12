
import createMDX from '@next/mdx'

const withMDX = createMDX({ 
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
})

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: { 
    mdxRs: true,
    optimizeCss: true,
    serverComponentsExternalPackages: ['sharp']
  },
  reactStrictMode: true,
  
  // 性能优化
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  
  // 构建优化
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production'
  },
  
  // 重定向规则
  async redirects() {
    return [
      {
        source: '/nano-banana',
        destination: '/guide/what-is-nano-banana',
        permanent: true,
      },
      {
        source: '/get-started',
        destination: '/tutorials/get-started',
        permanent: true,
      },
      {
        source: '/watermark',
        destination: '/faq/watermark-and-policy',
        permanent: true,
      },
      {
        source: '/policy',
        destination: '/faq/watermark-and-policy',
        permanent: true,
      }
    ]
  },
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400'
          }
        ]
      },
      {
          source: '/(.*)\\.(css|js|woff|woff2|eot|ttf|otf|png|jpg|jpeg|gif|ico|svg)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable'
            }
          ]
        }
    ]
  },
  
  // 图片优化
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  
  // Webpack 优化
  webpack: (config, { dev, isServer }) => {
    // 生产环境优化
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
}

export default withMDX(baseConfig)
