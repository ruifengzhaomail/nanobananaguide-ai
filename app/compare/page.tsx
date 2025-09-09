
import Link from 'next/link'
import { opponents } from '@/data/opponents'

export const metadata = {
  title: '模型对比目录｜Nano Banana vs 其它模型',
  description: '覆盖 Flux/GPT-Image 等主流模型的对比条目与实测要点。'
}

export default function CompareIndex() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold">模型对比目录</h1>
      <ul className="list-disc ml-5 mt-4">
        {opponents.map(o => (
          <li key={o.slug} className="mt-2">
            <Link className="text-blue-600 underline" href={`/compare/${o.slug}`}>
              Nano Banana vs {o.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
