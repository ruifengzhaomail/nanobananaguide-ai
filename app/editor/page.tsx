import AIImageEditor from '@/components/AIImageEditor'

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <AIImageEditor />
    </div>
  )
}

export const metadata = {
  title: 'AI 图片编辑器 - Nano Banana AI',
  description: '使用 AI 技术编辑和生成高质量图片，支持批量处理和智能优化',
}