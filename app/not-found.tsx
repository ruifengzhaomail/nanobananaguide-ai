import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '页面未找到 - 404',
  description: '抱歉，您访问的页面不存在。返回首页继续浏览 Nano Banana 指南。',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        {/* 404 图标 */}
        <div className="text-6xl font-bold text-gray-300 mb-4">
          404
        </div>
        
        {/* 主标题 */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          页面未找到
        </h1>
        
        {/* 描述文字 */}
        <p className="text-gray-600 mb-6">
          抱歉，您访问的页面不存在或已被移动。
          <br />
          请检查网址是否正确，或返回首页继续浏览。
        </p>
        
        {/* 操作按钮 */}
        <div className="space-y-3">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            返回首页
          </Link>
          
          <div className="text-sm text-gray-500">
            或者访问以下热门页面：
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
              href="/compare"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              模型对比
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/faq/watermark-and-policy"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              水印与合规
            </Link>
          </div>
        </div>
        
        {/* 搜索建议 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">寻找特定内容？</h3>
          <p className="text-sm text-gray-600 mb-3">
            您可以尝试以下方式：
          </p>
          <ul className="text-sm text-gray-600 space-y-1 text-left">
            <li>• 检查网址拼写是否正确</li>
            <li>• 使用导航菜单浏览内容</li>
            <li>• 访问 <Link href="/" className="text-blue-600 hover:underline">首页</Link> 查看最新内容</li>
            <li>• 查看 <Link href="/compare" className="text-blue-600 hover:underline">模型对比</Link> 了解更多工具</li>
          </ul>
        </div>
        
        {/* 联系信息 */}
        <div className="text-xs text-gray-400 mt-6">
          如果您认为这是一个错误，请通过邮件联系我们。
        </div>
      </div>
    </div>
  )
}