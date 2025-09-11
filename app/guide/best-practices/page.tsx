import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nano Banana AI图像编辑最佳实践指南 | 专业技巧与优化策略',
  description: '掌握Nano Banana AI图像编辑的专业技巧！包含人物一致性保持、多图融合优化、Prompt工程、质量提升等最佳实践，助你成为AI图像编辑专家。',
  keywords: [
    'Nano Banana最佳实践',
    'AI图像编辑技巧',
    'Gemini 2.5 Flash Image优化',
    'AI图像生成最佳实践',
    'Prompt工程技巧',
    '人物一致性编辑',
    'AI图像质量优化',
    '专业AI图像处理',
    'Nano Banana高级技巧',
    'AI图像编辑专家指南'
  ],
  openGraph: {
    title: 'Nano Banana AI图像编辑最佳实践 - 专业技巧完整指南',
    description: '学习专业级AI图像编辑技巧，掌握人物一致性、质量优化等核心方法',
    type: 'article',
    url: 'https://nanobananaguide.ai/guide/best-practices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana最佳实践指南 - AI图像编辑专业技巧',
    description: '从入门到专家：掌握AI图像编辑的所有核心技巧和优化策略',
  },
  alternates: {
    canonical: 'https://nanobananaguide.ai/guide/best-practices',
  },
}

export default function BestPracticesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Nano Banana AI图像编辑最佳实践：从入门到专家的完整指南</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-gray-700">
          <strong>摘要：</strong>本指南汇集了Nano Banana（Gemini 2.5 Flash Image）AI图像编辑的所有专业技巧和最佳实践，
          帮助你从基础用户成长为AI图像编辑专家，掌握人物一致性保持、质量优化、高效工作流等核心技能。
        </p>
      </div>

      <div className="prose max-w-none">
        <h2>快速导航</h2>
        <ul>
          <li><a href="#基础优化原则">基础优化原则</a></li>
          <li><a href="#人物一致性编辑的专业技巧">人物一致性编辑技巧</a></li>
          <li><a href="#prompt工程与优化策略">Prompt工程最佳实践</a></li>
          <li><a href="#图像质量优化技巧">质量提升方法</a></li>
          <li><a href="#专业工作流程建立">高效工作流程</a></li>
        </ul>

        <h2 id="基础优化原则">基础优化原则</h2>
        
        <h3>1. 输入图像质量标准</h3>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <h4>分辨率要求：</h4>
          <ul>
            <li>最低分辨率：1024×1024像素</li>
            <li>推荐分辨率：2048×2048像素或更高</li>
            <li>宽高比：建议使用1:1、4:3、16:9等标准比例</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4>图像质量检查清单：</h4>
          <ul className="space-y-2">
            <li>✅ 主体清晰，无模糊或噪点</li>
            <li>✅ 光线充足，避免过暗或过曝</li>
            <li>✅ 构图合理，主体居中或符合三分法则</li>
            <li>✅ 背景简洁，避免过于复杂的元素</li>
            <li>✅ 色彩平衡，无明显偏色问题</li>
          </ul>
        </div>

        <h3>2. AI模型选择策略</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Nano Banana适用场景：</h4>
            <ul className="space-y-1 text-sm">
              <li>• 人物肖像编辑（一致性要求高）</li>
              <li>• 产品图片处理（电商应用）</li>
              <li>• 多图元素融合</li>
              <li>• 背景替换和环境变换</li>
              <li>• 服装和配饰修改</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">与其他AI工具的配合使用：</h4>
            <ul className="space-y-1 text-sm">
              <li>• 初步创意：Midjourney生成概念图</li>
              <li>• 精细编辑：Nano Banana进行细节调整</li>
              <li>• 后期处理：传统软件进行最终优化</li>
            </ul>
          </div>
        </div>

        <h2 id="人物一致性编辑的专业技巧">人物一致性编辑的专业技巧</h2>
        
        <h3>1. 面部特征保持方法</h3>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h4>关键Prompt要素：</h4>
          <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`保持人物面部特征完全一致，包括：
- 眼睛形状、颜色和大小
- 鼻子轮廓和比例
- 嘴唇形状和厚度
- 脸型和下颌线条
- 肤色和质感`}
          </pre>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg mb-6">
          <h4>多角度编辑技巧：</h4>
          <ul>
            <li><strong>正面照</strong>：重点保持五官比例</li>
            <li><strong>侧面照</strong>：注意轮廓线条的连续性</li>
            <li><strong>三分之二角度</strong>：平衡正面和侧面特征</li>
          </ul>
        </div>

        <h3>2. 身体比例协调</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-3">身材一致性维护：</h4>
            <ul className="space-y-1 text-sm">
              <li>• 肩宽比例保持</li>
              <li>• 身高体型匹配</li>
              <li>• 手部和脚部尺寸协调</li>
              <li>• 整体姿态自然</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">服装编辑注意事项：</h4>
            <ul className="space-y-1 text-sm">
              <li>• 服装尺寸要符合人物体型</li>
              <li>• 褶皱和阴影要自然</li>
              <li>• 材质质感要真实</li>
              <li>• 颜色搭配要和谐</li>
            </ul>
          </div>
        </div>

        <h2 id="prompt工程与优化策略">Prompt工程与优化策略</h2>
        
        <h3>1. 高效Prompt结构</h3>
        
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
          <h4>标准Prompt模板：</h4>
          <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`[主要任务] + [具体要求] + [质量标准] + [约束条件]

示例：
"将背景替换为现代办公室环境，保持人物面部特征和服装不变，
确保光线自然协调，生成高质量专业照片效果，保留所有水印标识"`}
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4>分层描述技巧：</h4>
          <ol>
            <li><strong>主体描述</strong>：明确要编辑的对象</li>
            <li><strong>环境设定</strong>：详细描述目标场景</li>
            <li><strong>风格要求</strong>：指定艺术风格或质感</li>
            <li><strong>技术参数</strong>：分辨率、质量等要求</li>
          </ol>
        </div>

        <h3>2. 常用Prompt优化词汇</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">质量提升关键词：</h4>
            <ul className="space-y-1 text-sm">
              <li>• "高质量"、"专业级"、"4K分辨率"</li>
              <li>• "细节丰富"、"清晰锐利"、"色彩饱和"</li>
              <li>• "自然光线"、"完美构图"、"商业摄影质量"</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">风格控制词汇：</h4>
            <ul className="space-y-1 text-sm">
              <li>• 写实风格："photorealistic"、"真实照片效果"</li>
              <li>• 艺术风格："艺术化处理"、"创意风格"</li>
              <li>• 商业风格："商业摄影"、"产品展示"</li>
            </ul>
          </div>
        </div>

        <h2 id="图像质量优化技巧">图像质量优化技巧</h2>
        
        <h3>1. 光影处理最佳实践</h3>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
          <h4>光线一致性检查：</h4>
          <ul>
            <li>• 主光源方向要统一</li>
            <li>• 阴影方向要合理</li>
            <li>• 反光和高光要自然</li>
            <li>• 整体曝光要平衡</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h4>常见光影问题解决：</h4>
          <div className="space-y-3">
            <div>
              <p><strong>问题：</strong>人物和背景光线不匹配</p>
              <p><strong>解决：</strong>"调整人物光线与背景环境一致，确保阴影方向统一"</p>
            </div>
            <div>
              <p><strong>问题：</strong>面部光线过暗或过亮</p>
              <p><strong>解决：</strong>"优化面部光线，保持自然肤色和细节可见"</p>
            </div>
          </div>
        </div>

        <h2 id="专业工作流程建立">专业工作流程建立</h2>
        
        <h3>1. 项目规划阶段</h3>
        
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-6">
          <h4>需求分析清单：</h4>
          <ul className="space-y-2">
            <li>□ 明确编辑目标和用途</li>
            <li>□ 确定风格和质量要求</li>
            <li>□ 评估技术可行性</li>
            <li>□ 制定时间计划</li>
          </ul>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg mb-6">
          <h4>素材准备标准：</h4>
          <ul>
            <li>• 收集高质量原始图片</li>
            <li>• 准备参考图片和灵感素材</li>
            <li>• 整理相关的Prompt模板</li>
            <li>• 设置文件管理结构</li>
          </ul>
        </div>

        <h3>2. 质量控制体系</h3>
        
        <div className="bg-violet-50 border-l-4 border-violet-400 p-4 mb-6">
          <h4>多维度质量评估：</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="space-y-1 text-sm">
                <li>• <strong>技术质量</strong>：分辨率、清晰度、色彩</li>
                <li>• <strong>艺术质量</strong>：构图、美感、创意</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1 text-sm">
                <li>• <strong>一致性</strong>：风格统一、特征保持</li>
                <li>• <strong>实用性</strong>：符合使用目的和要求</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4>质量检查清单：</h4>
          <ul className="space-y-2">
            <li>□ 主体特征保持完整</li>
            <li>□ 光影效果自然真实</li>
            <li>□ 色彩搭配和谐统一</li>
            <li>□ 细节丰富清晰</li>
            <li>□ 整体构图平衡</li>
            <li>□ 符合使用要求</li>
          </ul>
        </div>

        <h2>高级应用场景</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">电商产品图制作</h3>
            <ul className="space-y-1 text-sm">
              <li>• 突出产品特色和卖点</li>
              <li>• 营造使用场景氛围</li>
              <li>• 保持产品真实性</li>
              <li>• 符合平台规范要求</li>
            </ul>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">个人写真和肖像</h3>
            <ul className="space-y-1 text-sm">
              <li>• 保持自然真实的外观</li>
              <li>• 适度优化而不过度修饰</li>
              <li>• 突出个人特色和魅力</li>
              <li>• 符合使用场合要求</li>
            </ul>
          </div>
        </div>

        <h2>总结与展望</h2>
        
        <p>Nano Banana AI图像编辑技术正在快速发展，掌握这些最佳实践将帮助你：</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <ul className="space-y-2">
              <li>• <strong>提高工作效率</strong>：通过标准化流程和优化技巧</li>
              <li>• <strong>保证输出质量</strong>：建立完善的质量控制体系</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• <strong>拓展应用领域</strong>：探索更多创新应用场景</li>
              <li>• <strong>建立竞争优势</strong>：在AI时代保持技术领先</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
          <p className="text-center text-gray-700 italic">
            记住，最佳实践不是固定不变的规则，而是需要根据具体情况灵活应用的指导原则。
            持续学习、不断实践、勇于创新，才能在AI图像编辑领域取得真正的成功。
          </p>
        </div>

        <h2>相关资源</h2>
        <ul>
          <li><a href="/tutorials/get-started" className="text-blue-600 hover:underline">Nano Banana快速上手教程</a></li>
          <li><a href="/compare" className="text-blue-600 hover:underline">AI图像编辑工具对比</a></li>
          <li><a href="/cases/ecommerce-main-image" className="text-blue-600 hover:underline">电商产品图制作案例</a></li>
          <li><a href="/faq/watermark-and-policy" className="text-blue-600 hover:underline">水印与合规政策</a></li>
        </ul>

        <hr className="my-8" />
        
        <p className="text-center text-gray-600 italic">
          本指南将持续更新，以反映最新的技术发展和最佳实践。建议收藏并定期查看更新内容。
        </p>
      </div>
    </div>
  )
}