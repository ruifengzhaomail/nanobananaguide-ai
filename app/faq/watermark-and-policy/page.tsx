
import React from 'react';

export const metadata = {
  title: '水印与合规 FAQ：可见水印 + SynthID 怎么处理',
  description: 'Nano Banana 生成图像的水印政策、SynthID 标识、商业使用合规指南和常见问题解答。'
};

export default function WatermarkAndPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="rounded-md bg-yellow-50 border border-yellow-200 p-3 text-sm mb-6">
        ⚠️ <strong>重要声明</strong>：本站为非官方指南，与 Google 无关联。所有内容仅供教育参考，请以 Google 官方条款为准。
      </div>

      <h1 className="text-3xl font-bold mb-6">水印与合规 FAQ：可见水印 + SynthID 怎么处理</h1>

      <p className="text-gray-600 italic mb-8">
        摘要：详解 Nano Banana 生成图像的水印机制、SynthID 技术、商业使用合规要求，以及如何正确处理 AI 生成内容的标识问题。
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">背景（为何要了解水印政策）</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>法律合规</strong>：AI 生成内容的标识和披露正在成为法律要求</li>
          <li><strong>平台政策</strong>：各大社交媒体和电商平台对 AI 内容有不同的标识要求</li>
          <li><strong>商业风险</strong>：不当使用可能面临版权、虚假宣传等法律风险</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">水印机制详解</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">1. 可见水印</h3>
          <p className="mb-3"><strong>特征</strong>：</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>通常位于图像的角落或边缘</li>
            <li>包含 Google 或相关的标识文字</li>
            <li>半透明覆盖，不影响主要内容观看</li>
            <li>无法通过简单的裁剪完全去除</li>
          </ul>
          <p><strong>作用</strong>：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>明确标识内容为 AI 生成</li>
            <li>防止误导性使用</li>
            <li>符合透明度要求</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">2. SynthID 隐形水印</h3>
          <p className="mb-3"><strong>技术原理</strong>：</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Google 开发的 AI 内容标识技术</li>
            <li>在像素级别嵌入不可见的数字指纹</li>
            <li>即使经过压缩、裁剪仍可检测</li>
            <li>需要专门的检测工具才能识别</li>
          </ul>
          <p><strong>检测方式</strong>：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google 提供的官方检测工具</li>
            <li>部分第三方 AI 检测服务</li>
            <li>未来可能集成到更多平台中</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">合规使用指南</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">个人使用</h3>
          <p className="mb-3"><strong>允许的用途</strong>：</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>个人创作和娱乐</li>
            <li>学习和实验</li>
            <li>非商业性分享（需标注 AI 生成）</li>
          </ul>
          <p><strong>注意事项</strong>：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>在社交媒体分享时主动标注"AI 生成"</li>
            <li>不要用于冒充真实照片</li>
            <li>尊重他人肖像权</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">商业使用</h3>
          <p className="mb-3"><strong>合规要求</strong>：</p>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li><strong>保留水印</strong>：不得去除可见水印和 SynthID 标识</li>
            <li><strong>明确标注</strong>：在使用场景中清楚标明"AI 生成内容"</li>
            <li><strong>遵守条款</strong>：严格按照 Google 使用条款执行</li>
            <li><strong>行业规范</strong>：符合所在行业的 AI 内容使用规范</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">常见问题解答</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Q: 可以去除水印吗？</h3>
            <p><strong>A</strong>: <strong>不可以</strong>。去除水印违反使用条款，可能面临法律风险。正确做法是保留水印并在使用时主动标注 AI 生成。</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Q: SynthID 会影响图像质量吗？</h3>
            <p><strong>A</strong>: 不会。SynthID 是在不影响视觉质量的前提下嵌入的，人眼无法察觉差异。</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Q: 如何检测图像是否包含 SynthID？</h3>
            <p><strong>A</strong>: 目前主要通过 Google 提供的检测工具，未来可能会有更多第三方工具支持。</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">继续学习</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>想了解基础知识？阅读 <a href="/guide/what-is-nano-banana" className="text-blue-600 hover:underline">什么是 Nano Banana</a></li>
          <li>需要上手指导？查看 <a href="/tutorials/get-started" className="text-blue-600 hover:underline">快速上手教程</a></li>
          <li>看实际应用？访问 <a href="/cases/ecommerce-main-image" className="text-blue-600 hover:underline">电商主图案例</a></li>
          <li>了解技术对比？浏览 <a href="/compare" className="text-blue-600 hover:underline">模型对比目录</a></li>
        </ul>
      </section>

      <hr className="my-8" />
      
      <p className="text-gray-600 italic text-center">
        合规使用 AI 技术，共建健康的数字内容生态。如有疑问，请咨询相关专业人士。
      </p>
    </div>
  );
}
