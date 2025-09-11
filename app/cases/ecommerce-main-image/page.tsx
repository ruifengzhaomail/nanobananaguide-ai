
import React from 'react'
import Image from 'next/image'

export default function EcommerceMainImagePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">电商主图：把产品"放进"更卖货的场景</h1>
      
      <p className="text-gray-700 mb-6">
        我们示范如何利用 Nano Banana 生成合规、统一风格的电商主图：
      </p>
      
      <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
        <li>上传白底产品图；</li>
        <li>提示词指定目标场景（仓库、农田、展台）；</li>
        <li>保持产品比例、角度与结构合理；</li>
        <li>保留水印与 AI 标识，避免"真实照片"误导。</li>
      </ol>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-gray-700">
          <strong>实战案例：</strong>农业机械（拖拉机、喷雾器、播种机）主图构图清单附在下载包中。
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">示例图库（占位图）</h2>
      <p className="text-gray-600 mb-6">下方 9 组为「前后对比」占位图（部署后请替换为真实样张）。</p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium mb-4">人像</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始人像图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始人像图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始人像图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">宠物</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始宠物图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始宠物图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始宠物图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">电商/产品</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始产品图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始产品图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理前</span>
              </div>
              <p className="text-sm text-gray-600">原始产品图片</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 flex items-center justify-center mb-2">
                <span className="text-gray-500">处理后</span>
              </div>
              <p className="text-sm text-gray-600">AI优化后效果</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-4">
        <p className="text-gray-700">
          <strong>提示：</strong>实际部署时，请将占位图替换为真实的案例图片，展示Nano Banana的实际编辑效果。
        </p>
      </div>
    </div>
  )
}
