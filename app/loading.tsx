export default function Loading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="text-center">
        {/* 简洁的加载动画 */}
        <div className="w-8 h-8 border-2 border-gray-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* 简洁的加载文字 */}
        <p className="text-sm text-gray-600">
          加载中...
        </p>
      </div>
    </div>
  )
}