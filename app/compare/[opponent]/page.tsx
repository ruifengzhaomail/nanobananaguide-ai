
import { opponents } from '@/data/opponents'
import Link from 'next/link'
import type { Metadata } from 'next'

type Props = { params: { opponent: string } }

export function generateStaticParams() {
  return opponents.map(o => ({ opponent: o.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const o = opponents.find(x => x.slug === params.opponent)
  return {
    title: o ? `Nano Banana vs ${o.name}｜对比评测` : '对比评测',
    description: o ? `Nano Banana 与 ${o.name} 的对比要点与样张清单。` : '模型对比'
  }
}

export default function Page({ params }: Props) {
  const o = opponents.find(x => x.slug === params.opponent)
  if (!o) {
    return <div className="py-8">未找到此对比条目。返回 <Link className="underline text-blue-600" href="/compare">对比目录</Link></div>
  }
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold">Nano Banana vs {o.name}</h1>
      <p className="mt-3">下面罗列了双方的核心对比点（会随样张库更新）。</p>
      <div className="grid-cards mt-5">
        <div className="card">
          <h3 className="font-semibold">Nano Banana 优势</h3>
          <ul className="list-disc ml-5 mt-2">
            <li>人物/宠物一致性强，适合多轮编辑</li>
            <li>多图融合，便于把产品/主体置入目标场景</li>
            <li>合规水印（可见 + SynthID）</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">{o.name} 优势</h3>
          <ul className="list-disc ml-5 mt-2">
            {o.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>

      <div className="card mt-6">
        <h3 className="font-semibold">备注与建议</h3>
        <ul className="list-disc ml-5 mt-2">
          {o.notes.map(n => <li key={n}>{n}</li>)}
        </ul>
      </div>

      <div className="mt-6">
        <Link className="btn" href="/compare">← 返回对比目录</Link>
      </div>
    </div>
  )
}
