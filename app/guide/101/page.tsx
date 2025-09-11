
import React from 'react'

export default function Guide101Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nano Banana 101：从零开始的入门清单</h1>
      
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>步骤 1：准备清晰的人像/产品图（或两张用于融合）。</li>
        <li>步骤 2：明确编辑目标（换背景/换装/加道具/融合到场景）。</li>
        <li>步骤 3：描述式提示词 + 参考图上传；</li>
        <li>步骤 4：迭代 2–3 次，小步修改；</li>
        <li>步骤 5：保留水印，不进行"去水印"操作。</li>
      </ul>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <p className="text-gray-700">
          推荐阅读：
          <a href="/tutorials/get-started" className="text-blue-600 hover:underline ml-1">快速上手</a>。
        </p>
      </div>
    </div>
  )
}
