
export type Opponent = { slug: string; name: string; strengths: string[]; notes: string[] }

export const opponents: Opponent[] = [
  {
    slug: 'flux-kontext',
    name: 'Flux (Kontext 系列)',
    strengths: ['风格化生成', '细节锐度不错', '社区范例多'],
    notes: ['一致性与多图融合是 Nano Banana 优势位', '速度与延迟对比视负载而定']
  },
  {
    slug: 'gpt-image',
    name: 'GPT-Image',
    strengths: ['文本到图生成', '生态集成度高'],
    notes: ['编辑一致性与多图融合上，Nano Banana 更强（实测样张对比）']
  }
]
