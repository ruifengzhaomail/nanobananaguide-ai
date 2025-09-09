'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 可以在这里记录错误到错误报告服务
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        {/* 错误图标 */}
        <div className="text-6xl mb-4">
          ⚠️
        </div>
        
        {/* 主标题 */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          出现了一些问题
        </h1>
        
        {/* 描述文字 */}
        <p className="text-gray-600 mb-6">
          抱歉，页面加载时遇到了错误。
          <br />
          请尝试刷新页面或返回首页。
        </p>
        
        {/* 错误详情（仅在开发环境显示） */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
            <h3 className="font-medium text-red-900 mb-2">错误详情：</h3>
            <p className="text-sm text-red-700 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                错误ID: {error.digest}
              </p>
            )}
          </div>
        )}
        
        {/* 操作按钮 */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mr-3"
          >
            重试
          </button>
          
          <Link 
            href="/"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            返回首页
          </Link>
        </div>
        
        {/* 帮助链接 */}
        <div className="mt-6">
          <div className="text-sm text-gray-500 mb-2">
            或者访问以下页面：
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              href="/guide/what-is-nano-banana"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              什么是 Nano Banana
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/tutorials/get-started"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              快速上手
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/faq/watermark-and-policy"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              常见问题
            </Link>
          </div>
        </div>
        
        {/* 技术支持 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">需要帮助？</h3>
          <p className="text-sm text-gray-600">
            如果问题持续存在，请尝试：
          </p>
          <ul className="text-sm text-gray-600 space-y-1 text-left mt-2">
            <li>• 清除浏览器缓存并刷新页面</li>
            <li>• 检查网络连接是否正常</li>
            <li>• 尝试使用其他浏览器访问</li>
            <li>• 稍后再试，可能是临时性问题</li>
          </ul>
        </div>
        
        {/* 联系信息 */}
        <div className="text-xs text-gray-400 mt-6">
          如果问题仍然存在，请通过邮件联系我们的技术支持。
        </div>
      </div>
    </div>
  )
}