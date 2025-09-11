import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nano Banana快速上手教程：10分钟掌握AI图像编辑 | Gemini 2.5 Flash Image指南',
  description: '零基础学会Nano Banana AI图像编辑！详细步骤教程包含Gemini操作指南、Prompt模板、人物一致性编辑技巧，快速上手Google最新AI图像生成工具。',
  keywords: [
    'Nano Banana教程',
    'Gemini 2.5 Flash Image使用教程',
    'AI图像编辑入门',
    'Google AI图像生成',
    'Nano Banana上手指南',
    'AI图像处理教程',
    'Gemini图像编辑',
    'AI图像生成技巧',
    'Prompt模板',
    '人工智能图像编辑'
  ],
  openGraph: {
    title: 'Nano Banana快速上手教程 - 10分钟学会AI图像编辑',
    description: '从零开始学习Nano Banana，包含详细操作步骤、实用Prompt模板和专业编辑技巧',
    type: 'article',
    url: 'https://nanobananaguide.ai/tutorials/get-started',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana入门教程 - AI图像编辑零基础指南',
    description: '10分钟掌握Google最新AI图像编辑工具，包含实用技巧和模板',
  },
  alternates: {
    canonical: 'https://nanobananaguide.ai/tutorials/get-started',
  },
}

export default function GetStartedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nano Banana快速上手教程：10分钟掌握AI图像编辑完整指南</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-gray-700">
          <strong>摘要：</strong>这是一份零基础的Nano Banana AI图像编辑教程，将手把手教你在Gemini中使用Gemini 2.5 Flash Image完成专业级图像编辑，包含详细操作步骤、实用Prompt模板和高级编辑技巧。
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">教程目录</h2>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li><a href="#1-准备工作与入口访问" className="text-blue-600 hover:underline">准备工作与平台访问</a></li>
        <li><a href="#2-上传图片与基础-prompt" className="text-blue-600 hover:underline">图片上传与基础编辑</a></li>
        <li><a href="#3-迭代优化与细节调整" className="text-blue-600 hover:underline">迭代优化技巧</a></li>
        <li><a href="#实测与对比" className="text-blue-600 hover:underline">性能对比分析</a></li>
        <li><a href="#合规与水印" className="text-blue-600 hover:underline">合规使用指南</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">背景（为何要学这个）</h2>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li><strong>门槛降低</strong>：相比传统 PS，Nano Banana 只需要自然语言描述就能完成复杂编辑</li>
        <li><strong>效果出色</strong>：在人物一致性和多图融合方面表现优异，适合个人和商业用途</li>
        <li><strong>免费使用</strong>：通过 Gemini 可以免费体验，无需额外付费</li>
      </ul>

      <h2 id="1-准备工作与入口访问" className="text-2xl font-semibold mb-4">1. 准备工作与入口访问</h2>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">访问方式</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>打开 <a href="https://gemini.google.com" className="text-blue-600 hover:underline">Gemini官网</a></li>
          <li>登录Google账号（建议使用Gmail）</li>
          <li>确保选择了Gemini 2.5 Flash模型</li>
        </ol>
      </div>

      <h2 id="2-上传图片与基础-prompt" className="text-2xl font-semibold mb-4">2. 上传图片与基础编辑</h2>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">基础操作流程</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>点击上传按钮，选择要编辑的图片</li>
          <li>等待图片上传完成</li>
          <li>输入编辑指令（Prompt）</li>
          <li>等待AI处理并生成结果</li>
        </ol>
        
        <h3 className="text-xl font-medium mb-3 mt-6">实用Prompt模板</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="font-medium mb-2">背景替换：</h4>
          <code className="text-sm">请将图片背景替换为[具体描述]，保持人物不变</code>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="font-medium mb-2">服装更换：</h4>
          <code className="text-sm">请将人物的[当前服装]替换为[目标服装]，保持人物面部和姿势不变</code>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="font-medium mb-2">风格转换：</h4>
          <code className="text-sm">请将图片转换为[风格名称]风格，如卡通、油画、素描等</code>
        </div>
      </div>

      <h2 id="3-迭代优化与细节调整" className="text-2xl font-semibold mb-4">3. 迭代优化与细节调整</h2>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">优化技巧</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>渐进式调整</strong>：先做大的改动，再调整细节</li>
          <li><strong>具体描述</strong>：避免模糊词汇，使用具体的颜色、材质、风格描述</li>
          <li><strong>保持一致性</strong>：在每次调整中强调要保持的元素</li>
          <li><strong>多次尝试</strong>：如果效果不理想，可以重新生成或调整Prompt</li>
        </ul>
      </div>

      <h2 id="实测与对比" className="text-2xl font-semibold mb-4">实测与对比</h2>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">性能表现</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>人物一致性</strong>：在保持人物特征方面表现优秀</li>
          <li><strong>背景处理</strong>：能够自然地融合新背景</li>
          <li><strong>细节保留</strong>：在编辑过程中能较好保留原图细节</li>
          <li><strong>处理速度</strong>：通常在30秒内完成编辑</li>
        </ul>
      </div>

      <h2 id="合规与水印" className="text-2xl font-semibold mb-4">合规使用指南</h2>
      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700">
            <strong>重要提醒：</strong>使用AI编辑的图片可能包含水印，请注意版权和使用规范。
          </p>
        </div>
        
        <h3 className="text-xl font-medium mb-3">使用建议</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>仅用于个人学习和非商业用途</li>
          <li>避免编辑他人肖像权保护的图片</li>
          <li>注意平台的使用条款和限制</li>
          <li>商业使用前请咨询相关法律建议</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">总结</h2>
      <p className="text-gray-700 mb-4">
        Nano Banana通过Gemini 2.5 Flash Image为用户提供了强大的AI图像编辑能力。掌握基础操作和优化技巧后，
        你就能够创作出专业级的图像编辑效果。记住要合规使用，并不断练习以提升编辑技能。
      </p>
      
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <p className="text-gray-700">
          <strong>下一步：</strong>尝试更多高级编辑技巧，可以查看我们的 
          <a href="/guide/advanced-techniques" className="text-blue-600 hover:underline">高级技巧指南</a> 和 
          <a href="/guide/best-practices" className="text-blue-600 hover:underline">最佳实践</a>。
        </p>
      </div>
    </div>
  )
}