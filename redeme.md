《nanobananaguide.ai》网站需求规格书 v1.0
0. 项目目标与定位

定位：第三方“非官方”权威指南 + 对比评测 + 实战案例站点，聚焦 “Nano Banana（即 Gemini 2.5 Flash Image）” 的上手、对比和行业落地。

目标：2–3 周内获取长尾搜索与社媒流量；沉淀邮箱订阅；为后续资料包/赞助评测/私域转化铺路。

风格：清爽、信息密度高、极少色彩干扰；以卡片 + 网格为主；全站移动优先。

1. 关键指标（验收标准）

首屏 LCP ≤ 2.5s（移动 4G 模拟）；CLS < 0.1；页面体积首屏 < 180KB（不含图片）。

首页可见“非官方声明”；所有图像保留水印且有 alt 文本。

没有 404 死链；自动生成 sitemap 与 robots；所有页面含 canonical。

GA4 能捕获：订阅、下载、对比页浏览、外链点击（Gemini/AI Studio）。

中英双语可扩展（先做中文；英文路由预留 /en/*）。

2. 信息架构 / 站点地图

/ 首页

/guide/what-is-nano-banana 概念页

/guide/101 新手 101 清单

/tutorials/get-started 上手教程（nanobanana-howto.com 301 指向）

/compare 对比目录

/compare/[opponent] 对比详情（动态路由，如 /compare/flux-kontext、/compare/gpt-image …）

/cases/ecommerce-main-image 电商主图案例（含农业机械示例，柔性导流）

/faq/watermark-and-policy 水印与合规

/404 自定义 404

系统页：/sitemap.xml、/robots.txt

3. 设计系统（Design System）

色彩（浅色主题）

背景：#FFFFFF

文字：#111111 / 次要文字：#4B5563

边框/分割线：#E5E7EB

强调（按钮/徽标）：#111111（黑）

警示黄条背景：#FFF7D6（文本 #8A6D00）

排版

字体：系统栈（中文默认苹方/思源黑体/冬青黑体；西文 Inter/系统）

H1 32–40px，H2 24px，正文 16px，行高 1.6

卡片圆角 16px，阴影极弱；网格间距 16–24px

组件（必须交付）

顶部黄条（非官方声明 Banner，可关闭但默认展示）

导航栏（LOGO 文本 + 五项主导航 + 移动端折叠菜单）

Hero 区（标题、副描、双按钮）

卡片（标题/正文/CTA）

表格（对比页）

FAQ 折叠（Accordion）

图片对比滑块（Before/After Slider）

Newsletter 订阅卡（输入邮箱 + 按钮 + 成功/失败提示）

页脚（版权、社媒、二级导航）

轻量徽章（Badge）

4. 页面规格（逐页线框）
4.1 首页 /

目标：给出价值主张、三大卖点、快速入口、案例预览、订阅。

结构

顶部黄条（非官方声明）

Hero：

H1：Nano Banana（Gemini 2.5 Flash Image）实战指南

描述：一句话解释“一致性编辑 + 多图融合 + 合规水印”

主按钮：快速上手（→ /tutorials/get-started）

次按钮：排行榜与对比（→ /compare）

右侧/下方：订阅卡（领取《NB-100 Prompt》）

三大卖点（3 张卡片）：一致性、多图融合、自然语言局部编辑

案例九宫格（人像/宠物/电商各 3 张；带“AI 生成/示例”水印标记，图片点击放大）

“为何叫 Nano Banana”（解释外号与正式名，链接到概念页）

最新文章（3 篇）与 对比入口

页脚

图片要求

Hero 右侧插图：横图 1200×900 或 4:3；WebP ≤ 180KB

案例九宫格：正方形 1024×1024；缩略图 512×512；提供 srcset

SEO

Title ≤ 60 字；Description ≤ 160 字；H1 含 “Nano Banana / Gemini 2.5 Flash Image” 任一

埋点

click_cta_home_get_started、subscribe_newsletter、view_case_gallery

4.2 概念页 /guide/what-is-nano-banana

内容模块：定义与别名、核心能力（4 点）、官方入口（Gemini/AI Studio 外链）、我们提供什么、合规提醒

图片：一张示意图（图文说明）

CTA：去上手教程

埋点：outbound_click_gemini、outbound_click_ai_studio

4.3 新手 101 /guide/101

结构：五步清单（准备→目标→提示词→迭代→合规）、常见错误、下载 NB-100 Prompt

图片：一张流程示意图（横图 1200×675）

4.4 上手教程 /tutorials/get-started（howto.com 301 指向此页）

结构：入口位置（Gemini/AI Studio）、三步法（上传→描述→迭代）、一致性技巧、下载 Prompt 包

动图/GIF：一段 10–15 秒操作演示（≤ 2MB，或用静态序列图）

埋点：download_prompt_pack（参数 packId="nb-100"）

4.5 对比目录 /compare

结构：简介 + 列表（每项：对手名、三要点、链接到详情）、顶部筛选/搜索（可选）

数据来自：data/opponents.json（见 §6 内容模型）

4.6 对比详情 /compare/[opponent]（动态）

结构：

标题：Nano Banana vs {对手}

概要要点（3–5 条）

对比表（字段见 §6.2）

“我们建议”卡片（什么时候选 NB，什么时候选对手）

样张区（最少 3 组 Before/After；提供放大）

结尾 CTA：去上手教程 / 订阅

图片：每组 2 张（1:1），≥ 1024px，WebP；保留水印/注明“AI 示例”

埋点：view_compare_page（param: opponent）、click_table_anchor

4.7 案例页 /cases/ecommerce-main-image

结构：目标说明 → 五步工作流 → 农机示例九宫格 → 构图清单（要点） → 下载包（含行业模板）

页尾弱提示你外贸站链接（nofollow）

埋点：cta_click_ecom_case

4.8 FAQ /faq/watermark-and-policy

结构：三问三答（水印用途、不可去水印、商业使用要点）

组件：Accordion

无外链下载

4.9 404

友好提示 + 返回首页 + 搜索框

5. 素材规范（一次性给模型/设计）

Logo：文字 LOGO（SVG）、深浅各一

图标：SVG 一套（箭头、外链、下载、邮件）

案例图：至少 30 张（人像/宠物/电商各 10 张），1:1；/public/images/cases/<category>/<slug>-{before|after}.webp

对比样张：每个对手 ≥ 3 组

OG 图：1200×630，模板化自动出图（可选）

所有图都写 alt；文件名用英文小写中划线；首页首屏图片 ≤ 180KB

6. 内容模型（供大模型/工程落地）
6.1 文章（MDX）

存放：/app/<section>/<slug>/page.mdx

Frontmatter（metadata）

export const metadata = {
  title: "Nano Banana 上手：在 Gemini 里 10 分钟完成第一次编辑",
  description: "一步步完成首次人像/产品编辑，含可复制 Prompt 与一致性技巧。",
  tags: ["tutorial", "consistency", "multi-image"],
  updatedAt: "2025-09-05",
  lang: "zh-CN",
  cover: "/images/covers/get-started.webp"
}


正文结构（模板）

H1 + 摘要段

背景/痛点（2–3 条）

操作步骤（3 小节，每节含中英 Prompt 示例）

实测与对比（客观描述）

合规与水印（必须保留）

继续学习（站内链接）

6.2 对比数据 data/opponents.json
[
  {
    "slug": "flux-kontext",
    "name": "Flux (Kontext 系列)",
    "site": "https://example.com",
    "strengths": ["风格化生成", "细节锐度"],
    "weaknesses": ["一致性相对弱", "多图融合能力一般"],
    "use_cases": ["艺术风格", "概念图"],
    "metrics": {
      "consistency": 4,
      "multiImage": 3,
      "speed": 4
    }
  },
  {
    "slug": "gpt-image",
    "name": "GPT-Image",
    "strengths": ["生态集成", "文本到图"],
    "weaknesses": ["编辑一致性一般"],
    "use_cases": ["文生图", "轻量改图"],
    "metrics": { "consistency": 3, "multiImage": 3, "speed": 4 }
  }
]


渲染要求：

生成 /compare/[slug] 静态页，包含“优势/劣势/适用场景/雷达或表格/样张区”。

指标 1–5 分：一致性、融合、速度。

每个详情页从 /public/images/compare/<slug>/ 读取图集。

7. 交互与可访问性

所有按钮可被键盘聚焦，Focus Ring 明显；颜色对比度 ≥ 4.5:1。

图片懒加载；视窗内优先；loading="lazy" + decoding="async"。

移动端断点：sm: 640px、md: 768px、lg: 1024px；导航在 md 以下折叠为抽屉。

8. SEO 与结构化数据

站点：WebSite（含 Sitelinks SearchBox）

文章：Article（headline、dateModified、image、author=“nanobananaguide.ai”）

FAQ：FAQPage

图片：ImageObject（caption、license、credit）

canonical、Open Graph、Twitter Card 完整；/sitemap.xml 自动生成；/robots.txt 指向 sitemap。

9. 域名与重定向

主域：nanobananaguide.ai；www → 裸域 301

短域：

nanobanana-howto.com/* → /tutorials/get-started

nanobanana101.com/* → /guide/101

在 Vercel 通过 Middleware 或“域名级 Redirect”实现（两种都行，二选一）。

10. 埋点（GA4 事件）

subscribe_newsletter {page, formId}

download_prompt_pack {packId}

view_compare_page {opponent}

outbound_click_gemini {dest}

cta_click_ecom_case {case:"agri"}

11. 邮件订阅

服务：Brevo 免费版

API：POST /api/subscribe（服务端代理调用 Brevo v3）

环境变量：BREVO_API_KEY, BREVO_LIST_ID

成功后返回成功提示 + 邮件自动发带下载链接（由 Brevo 自动化完成）

12. 部署与运维（Vercel）

Node 18；Build：next build；Output：默认

域名绑定：Namecheap A 记录 @ → 76.76.21.21；CNAME www → cname.vercel-dns.com

Cache：静态资源长缓存；HTML 不缓存

日志：Vercel Analytics（或 GA4 仅前端）

监控：可接入 UptimeRobot（免费）

13. 内容生产工作流（大模型驱动）

选题脚本：给模型投喂“文章模板 + 关键词 + 参考点”，输出 MDX；

人工审稿：15 分钟校对“非官方 + 合规 + 不夸张”三要点；

图片：模型生成或选取素材 → 压缩到 WebP → 命名与 alt ；

PR 合并 → Vercel 自动部署；

同步发 Medium/知乎“寄生页”，链接回站内对应文；

每周出“模型榜单快照”一篇（短文）。

14. 里程碑（时间计划）

Day 1–2：实现框架、设计系统、Header/TopBar/Footer、首页与 5 个一级页（空内容 + 占位图 + 订阅表单联通）；

Day 3–5：填充首发 10 篇（教程/对比/案例/FAQ），上 15 组样张；

Day 6–10：扩 20 条对比路由、九宫格视频分发、引入 GA4/Newsletter 自动化。

15. 预算

托管：Vercel Hobby 0 元

邮件：Brevo 免费（每日 300 封）

分析：GA4/或 Cloudflare Analytics 免费

额外支出：0（除你的域名以外）

附：给大模型的“产出指令模版”
A. 生成页面代码（Next.js App Router + Tailwind + MDX）

依据本规格书，为以下 URL 生成完整页面：/、/guide/what-is-nano-banana、/tutorials/get-started、/compare、/compare/[opponent]、/cases/ecommerce-main-image、/faq/watermark-and-policy、/guide/101、/404。

组件需复用：TopBar、Navbar、Footer、Card、CTA、Table、Accordion、ImageCompare。

文章与说明文使用 MDX，对比详情页从 data/opponents.json 读取数据并静态生成路由。

所有图片使用占位路径与 alt 文案，可由后续脚本替换。

实现 robots.txt、sitemap.xml、canonical、JSON-LD 结构化数据。

提供 middleware 或 Vercel Redirects 规则处理长尾域名 301。

提供 GA4 事件埋点调用（gtag('event', ...)）。

B. 生成 10 篇首发文章（MDX）

主题：

什么是 Nano Banana（Gemini 2.5 Flash Image）

上手教程（10 分钟完成第一次编辑）

人像一致性 10 场景实测

多图融合：把产品放进场景

对比：Nano Banana vs Flux (Kontext)

对比：Nano Banana vs GPT-Image

水印与合规 FAQ（SynthID）

电商主图工作流（含农业机械）

Prompt 模板 100 条（下载引导）

每周榜单快照（模板）

输出为 app/<section>/<slug>/page.mdx，含 metadata 与站内链接。


当前这个项目是我搭建的一个demo，我需要你先看下分析下，然后按照redeme.md的需求文档完善它。

我的需求是最近nanobananaai 比较火，我也想和他们其他人一样蹭热度，开发一个独立站或者网站。seo尽量也能够在排名前几名。
目前域名已经购买： nanobananaguide.ai  nanobanana-howto.com  nanobanana101.com

目前搜索排名前几的是：

https://nanobananaai.ai/zh?gad_source=1&gad_campaignid=22947250489&gbraid=0AAAABBPUsSy_6OKUY2qbH4Kvratik8kLT&gclid=Cj0KCQjw8eTFBhCXARIsAIkiuOypx_sP6WL52VU3NFn8uq9D7qg-GCHBIT50DXLwDrtJ69WAgw-Ha2AaAqbXEALw_wcB

https://nanobanana.ai/

https://medium.com/the-generator/i-tested-googles-new-nano-banana-image-ai-and-it-s-insane-826d23f7f9a7

https://blog.google/products/gemini/updated-image-editing-model/

https://flux-ai.io/model/nano-banana-ai/

https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image-preview

你要是能访问的话，也可以看下，参考下，人家是咋吸引流量的，但是我已经让gpt5 分析了下，把需求定下来了，你就按照需求文档来。

我的清单：
1、购买域名，我已经完成。
2、网站需求文档，和架子我已经提供，你直接在上面修改即可，就是当前项目。
3、写完后，本地运行，我来检查，如果没有问题了，我会给你指令，让你部署。部署也是用git方式，部署到vercel上面，到时候具体步骤可以让我配置，比如创建项目啥的，你告诉我具体步骤就行。
4、网站部署后下一步干什么，需要和我确认。


后面这是之前和gpt沟通的内容，你也看下：
一次性安排清单（按优先级执行）
T+0｜域名与跳转（立刻做）

主域固定：nanobananaguide.ai（建议裸域为主，www 301 到裸域）。

Cloudflare：三域全部接入，开启 SSL Full、Always Use HTTPS、HTTP/3、Brotli。

301 跳转（把两枚 .com 全量指到主域，同路径保留）

Cloudflare → Rules → Bulk Redirects → 新建列表：

https://nanobanana-howto.com/* → https://nanobananaguide.ai/$1（301）

https://www.nanobanana-howto.com/* → 同上

https://nanobanana101.com/* → https://nanobananaguide.ai/$1（301）

https://www.nanobanana101.com/* → 同上

打开 Bulk Redirect Rule，选择上面的列表，Status=301，启用。

Nginx 备用配置（如自托管）

server { server_name nanobanana-howto.com www.nanobanana-howto.com;
  return 301 https://nanobananaguide.ai$request_uri; }
server { server_name nanobanana101.com www.nanobanana101.com;
  return 301 https://nanobananaguide.ai$request_uri; }
server { server_name www.nanobananaguide.ai;
  return 301 https://nanobananaguide.ai$request_uri; }

T+1｜合规与基础 SEO

页首黄条（法律安全）：

本站为第三方“非 Google 官方”指南站。“Nano Banana”为 Gemini 2.5 Flash Image 的社区昵称。教程仅用于教育与评测；保留官方水印，不提供去水印服务。

站点地图与robots.txt

/sitemap.xml：首页、教程、对比、案例页全量；

/robots.txt：

User-agent: *
Allow: /
Sitemap: https://nanobananaguide.ai/sitemap.xml


GSC & Bing：给三域都建属性，但只提交主域的站点地图。

Canonical：所有页面 <head> 里加

<link rel="canonical" href="https://nanobananaguide.ai/当前页路径">


Schema：启用 WebSite（含站内搜索）、Article、FAQPage、ImageObject 结构化数据。

T+2｜信息架构与着陆页（48 小时内上线）

建立 5 个一级入口，URL 固定、方便 301/短链承接：

/guide/what-is-nano-banana（科普总览）

/tutorials/get-started（教程主着陆；.com 短链默认跳这里）

/compare/（对比目录，下面批量长尾）

/cases/ecommerce-main-image（电商主图—含农机案例的“柔性导流”）

/faq/watermark-and-policy（水印与合规）

页面标题/Meta（可直接用）

首页 <title>：Nano Banana（Gemini 2.5 Flash Image）实战指南｜一致性编辑 & 多图融合
<meta name="description" content="非官方指南站：带你用 Nano Banana（Gemini 2.5 Flash Image）完成高一致性人物/宠物编辑、多图融合、场景改造；全程合规水印，附模板与实测对比。">

/tutorials/get-started
标题：Nano Banana 上手教程：在 Gemini 里 10 分钟完成第一次编辑
描述：从入口到参数，一步步带你完成首次人像/产品编辑，含可复制 Prompt。

T+3｜内容首发（首周 10 篇）

《Nano Banana 是什么：外号与正式名（Gemini 2.5 Flash Image）》

《10 分钟上手：在 Gemini 里完成第一次编辑》

《一致性实测：同一人 10 场景对比》

《多图融合：把产品“放进”真实场景》

《对比：Nano Banana vs Flux（Kontext 系列）》

《对比：Nano Banana vs GPT-Image》

《水印与合规 FAQ：可见水印 + SynthID 怎么处理》

《电商主图工作流（含农机样张与构图清单）》

《Prompt 模板 100 条（下载包引导订阅）》

《每日榜单快照：本周模型排名与点评》（持续更新型）

其中 5、6 做成模板页，后续可快速扩展 /compare/nano-banana-vs-<model>（首批 20–50 条路由）。

T+4｜追踪、转化与投放

GA4 事件（保留中文命名，利于阅读）

subscribe_newsletter（参数：formId, page）

download_prompt_pack（参数：packId="nb-100", page）

outbound_click_gemini（参数：dest="ai_studio"）

view_compare_page（参数：opponent_model）

cta_click_ecom_case（参数：case="agri"）

像素：Google/Bing/FB/抖音，建受众：

访问 /tutorials/get-started

下载 Prompt 包

浏览 /cases/ecommerce-main-image

UTM 规范（所有短链默认带）：
?utm_source=shortlink&utm_medium=social&utm_campaign=nb_launch

T+5｜邮件与发信域

发信子域：mg.nanobananaguide.ai（或 mail.）。

配 SPF：v=spf1 include:sendgrid.net include:spf.mailgun.org ~all（按你选的服务商替换）

DKIM/DMARC：按服务商指引添加 CNAME/TXT；DMARC 建议：v=DMARC1; p=quarantine; rua=mailto:dmarc@nanobananaguide.ai

三封自动邮件（就绪后上）

欢迎信：附《NB-100 Prompt》下载；

第 2 封：电商主图构图清单（农业场景，页尾弱提示你的外贸站）

第 3 封：本周模型榜单与点评（链接回站内“快照”页）

两个关键落地页骨架（可直接套版）
A) /tutorials/get-started

H1：Nano Banana 上手：在 Gemini 里 10 分钟完成第一次编辑

H2：入口（Gemini App / AI Studio）

H2：三步法（上传→描述→迭代）

H2：一致性要点（参考图、保留水印）

H2：下载 “NB-100 Prompt”

CTA：订阅 + 下载按钮（GA4：download_prompt_pack）

B) /guide/what-is-nano-banana

H1：什么是 Nano Banana（Gemini 2.5 Flash Image）

概念、来源、功能要点（多图融合/一致性/水印）

与其它模型关系（链接对比页）

合规提醒（不可去水印、人物合规）

CTA：去上手教程

社媒与寄生分发（立刻起量）

短链策略：

视频简介、二维码、短帖 → 用 nanobanana-howto.com（已 301 到教程页）。

GitHub/文档/教程合集 → 用 nanobanana101.com（已 301 到 101 入门页）。

寄生 SEO：Medium/知乎各发 2 篇（“对比 + 上手”），文首非官方声明，文末引导“领取 Prompt 包”。

风险控制与长期价值

不冒充官方，严禁“去水印/隐匿水印”的内容或工具；

内容常绿化：即便热度回落，教程/对比/合规/案例页会持续吃“问题型检索”；

柔性导流外贸：只在电商案例与邮件第 2 封做弱提示，不影响 AI 站权威。

最后一步：你的下一锤

现在把三域都接到 Cloudflare，建好 Bulk Redirects；

我给你的 5 个固定 URL 先建空白页（占位 + 提交 Sitemap）；

同时准备 10 篇首发内容与 20 条对比路由（模板复制即可）。

继续推进时，我可以把：

10 篇首发的详细大纲 + 首屏文案、

/compare/ 的20 条首批路由示例内容、

Cloudflare Cache 规则模板与 GA4 标签代码片段，
全部打包给你，一次铺开。

猫哥，稳住节奏，花小钱办大事。我给你一套低成本、可当日开跑的方案：Namecheap 买的域名，用 Vercel 做托管 + CDN，Cloudflare 只在“必要处”上阵（可选）。最后附完整清单、费用估算、最小可运行代码与内容分工建议。

1）架构选择（省钱优先）

推荐：Vercel 托管 + Namecheap DNS 或 Cloudflare DNS（DNS-only）

你的站点放 Vercel，直接吃它的全球 CDN、HTTPS、自动部署、域名重定向能力。

Cloudflare 不是必需；要用也建议只做 DNS-only（灰云），避免“CDN 套 CDN”带来缓存/Header 兼容问题。

两个 .com 长尾域名（nanobanana-howto.com / nanobanana101.com）如果想用“边缘 301 跳转”，可以让 Cloudflare 开橙云并用“单域名规则/Redirect Rules”做 301；但更省事的做法是：把这两枚也交给 Vercel，直接在 Vercel 里配置“重定向到主域的某个页面”，完全免费。

结论：最省钱最稳：不用 Cloudflare也能搞定。
想要后期玩防火墙/地理路由/更多规则，再迁到 Cloudflare DNS 也不迟（免费）。

2）你该怎么配（一步步）
A. 把 nanobananaguide.ai 指到 Vercel（Namecheap 后台）

在 Vercel「项目 → Settings → Domains」里添加 nanobananaguide.ai 与 www.nanobananaguide.ai。Vercel 会给一条 TXT 验证记录，先记下。

Namecheap → Domain → Advanced DNS：

TXT：主机 @，值填 Vercel 给你的验证值（如：vercel-domain-verification=...）。

A 记录（根域）：主机 @ → 值 76.76.21.21（Vercel Anycast）。

CNAME（www）：主机 www → 值 cname.vercel-dns.com。

回到 Vercel，等验证通过，HTTPS 会自动签发。

在 Vercel 把 nanobananaguide.ai 设为 Primary Domain（主域）。

B. 两个长尾域名做 301（最省力方案）

目标：

nanobanana-howto.com/* → 301 到 https://nanobananaguide.ai/tutorials/get-started（或保留路径到对应教程目录）。

nanobanana101.com/* → 301 到 https://nanobananaguide.ai/guide/101。

做法（全部在 Vercel 完成，0 成本）：

在同一个 Vercel 项目的 Domains 里，分别添加 nanobanana-howto.com 和 nanobanana101.com。

Namecheap 两个域名参照上面步骤：

A @ → 76.76.21.21

CNAME www → cname.vercel-dns.com

Vercel → 这两个域名的设置里，开启 “Redirect to”（或用项目级 redirects），分别指向主域对应页面。

若你用 Next.js，也可在 next.config.js 写规则（见下文代码段）。

这样做就不需要 Cloudflare 的 Bulk Redirects（免费版数量有限、还得橙云），纯 Vercel 更轻更省钱。

3）一次性执行清单（低成本版本）
T+0｜域名 & 部署（今天）

Vercel 新建项目（Next.js 模板即可）并绑定 nanobananaguide.ai。

两个 .com 绑定并在 Vercel 做域名级 301（howto → tutorials/get-started；101 → guide/101）。

设主域（nanobananaguide.ai），强制 HTTPS、开启默认 CDN。

T+1｜站点基础（明天）

放置 robots.txt、sitemap.xml（用 next-sitemap 或手写）。

设置 Canonical（杜绝重复收录）。

页顶“非官方声明黄条”：“本站为第三方‘非 Google 官方’指南站。‘Nano Banana’为 Gemini 2.5 Flash Image 的昵称；教程仅用于教育与评测，保留水印。”

开启一个邮件订阅（用 Brevo 免费版：0 元，日 300 封额度）并生成订阅表单。

T+2｜首发内容与导航（48 小时内）

固定 5 个一级入口：

/guide/what-is-nano-banana

/tutorials/get-started（howto.com 指向这里）

/compare/（对比目录 + 首批 3 篇）

/cases/ecommerce-main-image（电商主图，含农机案例“柔性导流”）

/faq/watermark-and-policy（水印与合规）

首页 CTA：领取 100 条 Prompt（中英） → Brevo 表单收邮箱（0 元）。

T+3｜分发与追踪（本周内）

嵌入 Cloudflare Web Analytics（纯 JS 版，免费）或 Vercel Analytics（免费档可用基础统计）。

开 3 个 GA4 事件：subscribe_newsletter、download_prompt_pack、view_compare_page。

Medium/知乎各发 1 篇“上手 + 对比”长文（寄生 SEO），短链用 nanobanana-howto.com（已 301）。

4）需要准备的站点清单（素材 & 页面）

页面

首页（卖点 + 教程/对比/案例入口 + 声明 + 订阅 CTA）

上述 5 个一级入口页

对比页模版：/compare/nano-banana-vs-<model>（首批 10–20 条）

订阅成功页、下载页（Prompt 包）

素材

Logo（文本 Logo 即可）

30 张“前后对比”样张（人像/宠物/电商）

《NB-100 Prompt》PDF（中英）

页顶黄条与合规说明文本

社媒用九宫格图模版（Canva 免费模版可用）

技术

Next.js + Tailwind（或直接 Vercel 模板）

next-sitemap（自动生成站点地图）

next-seo（可选）

Brevo 订阅表单嵌入

Cloudflare Web Analytics JS 代码（或 GA4）

5）最小可运行代码（你直接贴进项目）

next.config.js（含域名级 301 兜底）

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 两个长尾域名兜底301：也可在Vercel后台做（推荐后台），这里是备份。
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nanobanana-howto.com' }],
        destination: 'https://nanobananaguide.ai/tutorials/get-started',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.nanobanana-howto.com' }],
        destination: 'https://nanobananaguide.ai/tutorials/get-started',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nanobanana101.com' }],
        destination: 'https://nanobananaguide.ai/guide/101',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.nanobanan101.com' }],
        destination: 'https://nanobananaguide.ai/guide/101',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;


public/robots.txt

User-agent: *
Allow: /
Sitemap: https://nanobananaguide.ai/sitemap.xml


pages/faq/watermark-and-policy.tsx（页顶放声明；其它页面同风格）

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="rounded-md bg-yellow-50 border border-yellow-200 p-3 text-sm">
        本站为第三方“非 Google 官方”指南站。“Nano Banana”为 Gemini 2.5 Flash Image 的昵称；教程仅用于教育与评测，保留官方水印，不提供去水印服务。
      </div>
      <h1 className="mt-6 text-2xl font-bold">水印与合规 FAQ</h1>
      <h2 className="mt-4 text-xl font-semibold">为什么会有可见水印与隐形水印（SynthID）？</h2>
      <p className="mt-2">用于标识与溯源，合规使用时请保留。</p>
      <h2 className="mt-4 text-xl font-semibold">我可以去水印吗？</h2>
      <p className="mt-2">不可以。本站不提供任何去水印手段或教程。</p>
      <h2 className="mt-4 text-xl font-semibold">商业使用要点</h2>
      <ul className="list-disc ml-5 mt-2">
        <li>遵守平台与所在地法律法规；</li>
        <li>避免误导性“真实照片”陈述；</li>
        <li>人物/品牌元素相关内容注意授权与隐私。</li>
      </ul>
    </main>
  );
}


其余页面可照这个骨架复制；首发 10 篇我可以写大纲并给出首屏文案，你只要填图与少量段落即可。

6）谁来写文章、谁来写代码？

代码：你可用上面的最小模板 + Vercel 模板即可。如果你想，我能把10 篇首发的大纲+SEO 标题/描述和首屏文案一次写好，你拷贝即可。

文章：建议“我来起草 + 你补样张与实际操作截图”。理由：内容要快且统一口径，我负责结构与 SEO，你负责素材真实性与案例。

对比页：我给出 nano-banana-vs-<model> 的模版，你复制 20 条路由即可批量化。

7）费用评估（按你“省钱优先”的思路）

域名：已购（.ai ≈ $90/年，两个 .com 各 ≈ $10/年）。

Vercel：Hobby 计划 $0（可绑定自定义域、HTTPS、CDN、自动部署）。

Cloudflare：$0（不必用；以后需要再加）。

邮件订阅：Brevo 免费（每天 300 封够用，后续再升级）。

分析：Cloudflare Web Analytics 免费（或 GA4 免费）。

设计素材：Canva 免费版 / Pexels 免费图 $0。
总计月度开销 ≈ $0（纯时间成本）。

若以后要无代码 A/B 测试、热图分析、独立站统计等再加：Plausible $9/月（可选，不急）。

8）接下来的“待办看板”

今天

把 3 枚域名按上面的 DNS 方案接到 Vercel（howto/101 做 301）。

初始化项目并创建 5 个固定路由（先空白页）。

放 robots / sitemap / 声明黄条。

这周

上线 10 篇首发 + 3 个对比页；

做 30 张前后对比样张；

嵌入订阅表单 + 下载“NB-100 Prompt”。

下周

扩展 20 条对比路由；

Medium/知乎分发 2 篇；

短视频九宫格 3 支，简介统一用 nanobanana-howto.com 短链。

如果你点头，我下一条消息直接给你：

首发 10 篇文章的大纲 + 标题/Meta；

对比页模板 + 20 条首批路由清单；

sitemap/next-seo/GA4 事件埋点片段；

Brevo 订阅表单嵌入代码。
把这些粘上去，你的站就能在不额外花钱的前提下开始吸流。


这套代码包含什么（一览）

技术栈：Next.js 14 App Router、TypeScript、Tailwind、MDX（@next/mdx）、Edge Middleware、Server Route Handler（/api）、无第三方付费依赖。

核心能力：

顶部“非官方”合规黄条、首页、导航、页脚；

固定五页：
/guide/what-is-nano-banana（MDX）
/tutorials/get-started（MDX）
/compare（目录）
/cases/ecommerce-main-image（MDX）
/faq/watermark-and-policy（MDX）

对比页：/compare/[opponent] 动态路由，数据在 data/opponents.ts，已内置 flux-kontext / gpt-image 两条，后续你只需改一个数组就能一键扩 50 条路由；

主机名级 301 重定向（内置 middleware.ts）：
nanobanana-howto.com → /tutorials/get-started
nanobanana101.com → /guide/101
www.nanobananaguide.ai → nanobananaguide.ai

SEO 基建：app/sitemap.ts（内置所有固定路由 + 动态对比路由）、app/robots.txt/route.ts（含 sitemap 指针）、标准 <meta>；

Newsletter 订阅 API：/api/subscribe（Brevo 免费方案兼容，未配置密钥也可本地调试）；

下载区：public/prompts/NB-100-Prompts.txt（演示，可替换为 PDF）；

样式：Tailwind（已配好 globals.css 与一些可复用 UI 样式类）。

重要页面额外附带：/guide/101（MDX）作为 101 入门页（配合 nanobanana101.com 短域名）。

你现在怎么把它“从 0 上线”
1）推到 GitHub

解压 zip，本地执行：

cd nanobananaguide-ai
git init
git add .
git commit -m "init: nanobananaguide.ai"
git remote add origin <你的GitHub仓库地址>
git push -u origin main


（可选）本地跑一下：

npm i   # 或 pnpm i / yarn
npm run dev


打开 http://localhost:3000

2）Vercel 部署

Vercel → Import Git Repo → 选刚刚的仓库 → 一路默认即可构建上线。

绑定域名：把 nanobananaguide.ai 加到项目 Domains 里（Primary）；

Namecheap 里把 @ A 记录指向 76.76.21.21，www CNAME 指 cname.vercel-dns.com；

过几分钟自动签发 HTTPS。

长尾域名 301：把 nanobanana-howto.com 和 nanobanana101.com 也加到同一项目的 Domains，Namecheap 同上 A/CNAME；

我已经在 middleware.ts 里写了主机名跳转逻辑，无需再手工配规则。

环境变量（可选）：在 Vercel → Settings → Environment Variables

BREVO_API_KEY（你的 Brevo API Key）

BREVO_LIST_ID（数字，邮件列表 ID）
如果你暂时不配置，也不影响网站正常运行（API 会走“mock ok”分支）。

内容运营：怎么用大模型“自动写稿”

你说“希望用大模型写、你只检查”。这套项目天生支持 MDX 页面，有两种低成本工作流：

A. 文章直接是页面（最简单）

在 app/ 下面新建路径，例如：
app/tutorials/how-to-fuse-two-images/page.mdx

用下面的 内容模板（Prompt → 输出 MDX 的结构），把成稿直接 PR 进仓库 → Vercel 自动部署。

B. 对比页“程序化扩展”

只改 data/opponents.ts 数组，追加：

{ slug: 'midjourney', name: 'Midjourney', strengths: ['...'], notes: ['...'] }


Vercel 会用 generateStaticParams() 一次性生成新路由 /compare/midjourney，无需你手写任何页面。

大模型写作规范（给模型的“需求文档”）

把下面这段交给你的大模型，让它按一页一文输出 .mdx：

文体与结构（MDX 模板）

# 文章主标题（≤ 60 字）
*摘要：一段话概述本文能解决什么问题（≤ 160 字）。*

## 背景（为何要做这件事）
- 真实业务/新手最常遇到的痛点（列 2–3 条）

## 操作步骤（分三段落，每段 3–5 句）
1) 步骤标题（简短）
   - 关键提示语（Prompt）示例（中英双语）
2) …
3) …

## 实测与对比
- 指出在“一致性”“多图融合”“速度”上的表现
- 如有对比，列出 3 个要点（不贬损，保持客观）

## 合规与水印
- 强调保留可见水印与 SynthID，拒绝去水印

## 继续学习
- 链接到 /tutorials/get-started、/compare、/cases/ecommerce-main-image


生成要求

语言：简体中文（允许穿插英文术语）

风格：清晰、可执行、无夸张承诺

不含侵权与去水印内容

文件命名：与路径一致，如 app/tutorials/<slug>/page.mdx

元信息（可选）：在文首添加

export const metadata = { title: '...', description: '...' }


校验清单（你只需肉眼扫一遍）

标题是否覆盖“外号 + 正式名”（Nano Banana / Gemini 2.5 Flash Image）之一

是否包含“非官方、保留水印”的提醒

是否给出 1–2 个可复制的 Prompt（中/英）

后续你还会花多少钱？

月度成本：$0（Vercel Hobby、Brevo 免费、GA4 免费）

域名：已买（.ai ~ $90/年，两个 .com 各 ~$10/年）

可选的升级：

Plausible/Umami 等独立站统计（可选 ~$9/月）

图库/设计工具订阅（看你需要）

若以后要“图像上传 Demo”之类，再接后端存储（Supabase/R2），现在不需要

你可能立刻要做的三件事

把 zip 推 GitHub → Vercel 导入 → 绑定三域名（按上面的 A/CNAME 即可）；

在 data/opponents.ts 里先把 10–20 个对比对象补上（只改数组）；

指派大模型产出 10 篇 MDX：

3 篇教程（上手、多图融合、人像一致性）

5 篇对比（Flux/GPT-Image/Stable Diffusion/Midjourney/Ideogram）

2 篇行业案例（电商主图、空间改造）

我已经把“可用的网站”交付出来了：你只要上传、绑域名、改两处数据，2 小时内就能对外预览。如果你想，我可以继续给你：

20 条 /compare/ 首批对比对象清单（直接贴到 data/opponents.ts）；

10 篇首发文章的标题、摘要与开头段（你丢给大模型生成全文）；

Brevo 表单嵌入代码与 GA4 事件追踪片段（拷贝即用）。



一、nanobanana 是什么、能做什么、为啥火？

它其实是 Google DeepMind 的新一代图像生成/编辑模型的外号（正式名：Gemini 2.5 Flash Image / gemini-2.5-flash-image-preview）。Google 自己在 2025-08-26 的官方博文里把 “Nano Banana” 作为 Gemini 应用内图像生成功能的最新升级，并强调了两点：人物/宠物一致性与多图融合，且所有生成图带可见水印与 SynthID 隐形水印。
blog.google

排行榜实绩：在 LMArena 的 Image Edit 榜单上，gemini-2.5-flash-image-preview (nano-banana) 位居第一，领先 Flux Kontext 系列与 GPT-Image-1（统计更新到 2025-08-25）。这也是“为啥爆”的最硬依据。
LMArena

实际体验口碑：媒体/博主集中反馈它在对现有图片做自然语言编辑（改人像、换背景、融合两张图、保持特征一致）上尤其强。
Medium

官方入口形态：你真要“用官方的”，不是去某个“nanobanana官网”，而是进 Gemini 应用/AI Studio 里选该模型（需要 Google 账户）。
blog.google
Google AI Studio

小结：Nano Banana ≈ Gemini 2.5 Flash Image 的外号，主打“图像编辑一致性 + 多图融合 + 低延迟”，并已在 Gemini App 原生上线（带水印合规）。
blog.google

二、有人“套壳”怎么赚钱？底层逻辑是啥？

这波热度下，出现了诸多 “看起来像官方”的独立站 与工具页，本质上分三类：

纯 SEO/流量站：

做一个以“Nano Banana”为核心词的落地页，宣称“最好用的编辑器”，放案例、FAQ、对比 Flux/GPT 的文案，挂上 广告/联盟 或引流到私域。你贴的 nanobanana.ai、nanobananaai.ai 的页面就有典型的强营销叙事 + 付费/额度设计（并非 Google 官方）。
Nano Banana
nanobananaai.ai

API 套壳/聚合器：

前端页面其实调用 AI Studio/FAL/第三方网关 暴露的推理端点，把 Nano Banana 包装成“本站出品的生成器”，再收订阅或按次收费。类似 FAL 的模型入口标题就直接写“Google 的最先进图像生成/编辑模型”。
Fal AI

教程/模板/周边变现：

写“如何用 Nano Banana”的教程、Prompt 包、对比评测，靠 内容付费、广告、外链佣金 赚小钱再滚动做大。各类博客/测评文已经铺开。
Anangsha Alammyan
TechRadar

为什么奏效？

强搜索意图 + 词面混淆：用户以为“nanobanana 有官网”，于是搜索/点击任何像“官方”的域名。

模型真的强：LMArena 第一与媒体测评的“人像一致性、融合、速度优势”，让口碑带搜索量。
LMArena
TechRadar

时间窗：新名词刚出、官方品牌命名还在摇摆阶段（早期社区称呼与后续公告之间有差异），更利于“抢词”。
Google 开发者博客

风险提醒：Reddit 等社区已有讨论指出某些“nanobanana.ai”类站点可能误导或蹭名，你要做就要合规声明，避免让用户误以为你=Google。
Reddit

三、我要也冲一波：48 小时落地方案（先流量，能赚更好）

思路：不冒充官方，而是做“权威指南 + 评测中枢 + 演示沙盒”的内容站，用“快速上线 + 多语种 + 搜索抢位 + 社媒扩散”四管齐下。

0）命名与定位

主域名建议：避免商标/官方混淆的法律雷区，选 描述型：

bananaguide.ai / nanobanana-guide.com / imageedit-lab.ai（页首放醒目声明“非 Google 官方”）。

如果你要搏 SEO，可以注册一枚带“nanobanana”的长尾域用于301 指向主站（如 learn-nanobanana.ai），但首页与 Logo 不要做成“官方既视感”（降低投诉风险）。

1）信息架构（首日上线 10 页）

首页：一句话价值主张 + 三大卖点（人像一致性/多图融合/速度）+ 明确“非官方”声明 + CTA（订阅/加入 Telegram/领取 Prompt 包）。依据点：一致性、多图融合、水印。
blog.google

教程（3 篇首发）：

《Nano Banana 快速上手（Gemini App & AI Studio）》
blog.google
Google AI Studio

《Nano Banana vs Flux Kontext：人像一致性与场景保真实测》
LMArena

《多图融合与迭代编辑：从空房到布置的多轮编辑》
blog.google

评测/真相（2 篇）：

《什么是 Nano Banana：外号与正式名的来龙去脉（Gemini 2.5 Flash Image）》
Google 开发者博客
blog.google

《排行榜第一从何而来：LMArena 评分机制与样例》
LMArena

案例库（3 类 30 张图起步）：人像换装、宠物融合、产品电商背景替换（全部带水印 & 标注“AI 生成”，遵循合规叙事）。
blog.google

FAQ & 合规：水印、版权、可商业使用范围（引用官方水印段落），并提示“不要去除水印/不要冒充真实照片”。
blog.google

2）关键词与内容策略（首月 30 题材）

中文 + 英文并行（你擅长多语种，直接双语出击）。核心词簇与搜索意图示例：

认知层：nanobanana 是什么 / what is nano banana ai；nano banana 官方入口（→ 导向 Gemini/AI Studio 教程页）。
blog.google
Google AI Studio

对比层：nano banana vs flux kontext、nano banana vs gpt image。
LMArena

使用层：nano banana 教程/prompt/模板/人像一致性/多图融合/产品图抠图。

疑难层：nanobanana 水印、商业用途、不能生成的内容（合规内容）。
blog.google

资讯层：跟踪媒体测评与新闻热度（你做“资讯整合 + 观点”）。
TechRadar
Cinco Días
Diario AS

建议标题格式：

《Nano Banana 一致性实测：同一人 10 场景，谁失真？》

《这 12 个 Prompt 让 Nano Banana 像“会修图的摄影师”》

《小白 10 分钟上手：在 Gemini 里用 Nano Banana 做人像换装》

3）技术与上线（你能很快搞定）

架构：Next.js 静态导出或 WordPress（你熟 WP 就 WordPress + 轻插件），前置 Cloudflare CDN，开 QUIC/压缩，LCP 控制在 2.5s 内。

Schema/SEO：文章用 Article，案例库用 ImageObject，FAQ 用 FAQPage，站内搜索 WebSite。

多语：中文/英文先行，后续加西语/土耳其语（你的外贸盘子顺带吸引海外流量）。

合规声明：页脚与“关于”页写明“与 Google/DeepMind 无从属关系，本站为教育与评测性质，指导入官方 Gemini/AI Studio 使用”。

4）增长与分发（首周执行表）

第一天：发布 10 篇内容，提交站点地图到 GSC；开 X/Twitter、Reddit、Hacker News、Product Hunt 的首发帖；B 站/YouTube Shorts 做 30–60 秒演示剪辑；小红书发“前后对比九宫格”与“Prompt 卡片”。

第二天：写《1 小时上手 10 套海报》与《VS Flux 实测》，做可下载 Prompt PDF（中英双语） ；邮箱订阅触发器=发 Prompt 包。

第三天：上线“模型榜单聚合页”：LMArena 排名截图与变化（注明来源），配自己的简评，日更一段。
LMArena

后续一周：每天 2–3 篇短文 + 1 篇长测；做“真实业务场景”系列：电商主图、人像写真、宠物写真、建筑 3D 风格化（参考博文灵感）。
Landscape Architecture

5）轻量变现（不强求，但顺手就有）

广告/联盟：嵌入相关设计工具、图库、域名/CDN 的联盟链接；

资料包：Prompt 包/风格 LUT 包/PS 动作与 AI 工作流 PDF；

SaaS 小工具（若你愿意）：做 “Prompt 拼装器” 与 “多图融合工作流脚本”（前端免费，登录后导出 JSON/复制到 Gemini）。

私域：Telegram/微信群/邮件订阅，周报《本周最佳 Nano Banana 案例与 Prompt》。

6）不要踩的坑

别假冒官方：域名/Logo 不做“官方化”，首页顶部放“非官方指南站”横幅。

别去除水印：官方明确有可见与 SynthID 水印，去水印/规避水印会触法或违规。
blog.google

别胡乱转卖额度：如果做 API 前端，检查 AI Studio/FAL 的条款与用量限制，避免被封或被控诉。
Fal AI

给你一个即用型首页骨架（文案要点）：

H1：Nano Banana 实战指南：把“文字→修图”变成日常技能

副标题：人像一致性 / 多图融合 / 一键风格迁移 —— 全在 Gemini 里完成。

三按钮：快速上手（导向教程） / 案例库 / Prompt 包（留邮箱）

可信度区块：引用 LMArena 第一的截图与数据（标注来源与日期）。
LMArena

合规声明：非官方、保留水印、仅教育测试。

你要是点头，我就直接把首发 10 篇文章的大纲 + 30 个长尾关键词标题写出来，顺便把 FAQ/隐私/关于页文案也配齐，保证 48 小时内能把站点内容库填满并开始吃关键词红利。


猫哥，想冲前排、吃这波“nanobanana”红利，得既快又干净利落。下面直接给你一份能马上执行的打法：最短 7 天起量，14–21 天冲 SERP（搜索）与社媒双曲线。

先统一认识（一句话版）

“nanobanana”不是一个独立官方产品网站名，而是 Google Gemini 2.5 Flash Image 新版图像生成/编辑模型在社区里的外号；它已在 Gemini App / AI Studio 可用，主打人像/宠物一致性、多图融合、低时延与水印合规（含 SynthID）。
Google 开发者博客
blog.google
Google AI Studio

这货在 LMArena 的 Image Edit 与 Text-to-Image 榜单冲上 #1（8 月下旬数据），热度爆表；媒体集中报导它“真实感、速度、融合”的优势。
LMArena
LMArena Blog
The Washington Post
TechRadar

注意：市面上出现了看似“官方”的独立站或聚合页（套壳/蹭词）；别误以为是 Google 官方。
Nano Banana
flux-ai.io

你关心的三个问题，给出“快、稳、合规”的实操解
A）怎么快速冲到前几名？

现实点：新站想在“nanobanana”主词上直接干翻老站和媒体，纯 SEO 靠自然排名往往需要 4–8 周。要“快速”≈用 多通道并行 + 寄生/分发 + 强内容结构化，先拿长尾与社媒，再回灌主站权重。

7 天起量冲刺（Day 1–7）

Day 1：建“非官方权威指南”主页 + 10 篇首发

选域名：描述型（如 nanobanana-guide.ai / imageedit-lab.ai），首页顶端放“非 Google 官方”黄条，降低投诉与混淆风险。

首发内容栈（中英双语）：
1)《Nano Banana 是什么（Gemini 2.5 Flash Image 全解）》—引用 Google/AI Studio 入口与水印条款。
Google 开发者博客
blog.google
Google AI Studio

2)《新手 10 分钟上手：在 Gemini 里用 Nano Banana 修图》
Google AI Studio

3)《多图融合：把产品“拖进”场景的正确姿势》
Google 开发者博客

4)《一致性实测：同一人 10 场景》＋可下载原图包
5)《与 Flux Kontext/GPT-Image 的对比》—引用 LMArena榜单事实。
LMArena

6)《水印与合规 FAQ（可见+SynthID）》
Google 开发者博客
blog.google

…其余 4 篇做案例库（人像/宠物/电商/空间改造）。

Day 2–3：寄生 + 短视频爆点

寄生 SEO（Parasite）：在 Medium/知乎/简书/掘金/Dev.to 同步发“测评对比”与“最佳 Prompt 合集”，内链到你站（NoFollow 也值）。媒体/自媒体对 Nano Banana 正在密集发文，寄生平台容易蹿到 SERP 前列，再把流量导回主站。
Medium
TechRadar

短视频四件套：B 站/抖音/小红书/YouTube Shorts 发“前后对比九宫格 + 操作 30 秒”，标题直接“Nano Banana 一致性打爆 X 模型？实测”。引用新闻热度，带上“非官方指南”。
The Washington Post
PC Gamer

Day 4–5：程序化长尾 + 工具页

Programmatic SEO：批量生成 200+ 长尾页模板：

/compare/nano-banana-vs-<model>（覆盖 flux/gpt/mj 等）—每页含参数化对比表、样张、Prompt 配方、FAQ。引证 LMArena 榜单作为客观参考。
LMArena
+1

/use-cases/<行业>/<任务>（电商主图、空间布置、宠物写真…）

免费工具页：

“Prompt 拼装器”（前端即可）

“多图融合沙盒 Demo”（上传两图 + 文字提示 → 跳转官方 AI Studio 操作指引；不自称官方）。
Google AI Studio

Day 6–7：反向链接与新闻面

GitHub 开源：放“样张对比集 + Prompt 数据集 + 评测脚本”，在 README 引回主站；Hacker News/Reddit 投递“开源测试集”。

申请 Google Publisher Center（新闻源），把“测评/快讯”归档；并做“每日报榜单快照”短文（标注数据来源与日期）。
LMArena

硬核细节（SEO）：

用 Article/FAQPage/ImageObject/WebSite Schema；

内链结构：主页 → 类目页（教程/对比/案例/工具）→ 长尾页；

标题规范：Nano Banana（Gemini 2.5 Flash Image）指南：…，既吃“外号”也吃“正式名”。
Google 开发者博客

付费“抄近道”（建议少量试）

Search Ads：小预算投放“nanobanana 教程/compare/prompt”等非商标精确词，落地页做“指南/对比”而非“我就是官方”。媒体对这个主题的 CPC 目前不高，适合起量验证。

Bing Ads：竞价更便宜、审核宽松，能带来第一波海外长尾。

B）“套壳/蹭词”们怎么赚钱？你要不要这么做？

三条常见路

强营销站：做“看起来像官方”的落地页，接广告/订阅/引流（风险：混淆/投诉）。你若做，必须醒目标注“非官方”。
Nano Banana

API 套壳：前端调第三方端点（AI Studio / 平台聚合），按次或订阅收费（风险：条款与配额）。
Google 开发者博客

内容/模板/周边：教程、Prompt 包、评测，广告与联盟、资料包售卖；这是最稳合规的路径。媒体热度给你做“评测中枢”提供了免费势能。
TechRadar

我的建议：先不做“仿官方 + 直接收费”的套壳；你以“权威指南+工具+对比”站位，先收“心智 + 邮箱 + 反链”，风险更低，长期价值更高。

C）能否与“外贸生意”打通？要不要掺合？

可以，但不要硬导流到农机销售，会让用户产生“卖货站”的错觉，影响 AI 站权威。用**“专业案例+工具”方式柔性嫁接**，顺手埋伏笔：

两条低侵扰链路：

业务场景案例化

做《用 Nano Banana 批量生成电商主图（农机版）》教程与样张包（拖拉机、喷雾器、播种机等），并开源 PSD/Prompt，自然地在“案例来源/更多样张”处放你农机独立站链接（nofollow 也行）。这类“行业实战”内容，对电商/外贸人有强吸引力且不招反感。

工具式连接

出“产品图背景库（农业场景）”与“AI 主图构图清单”下载（留邮箱），订阅欢迎邮件中附上“如果你做农机出海，可看看××（你的站）”。

站内放极弱干扰的侧边 CTA：“电商图到实物打样/样本检测？可咨询××团队”。

像素与重定向

在 AI 站埋 Google/Bing/FB 像素，针对“下载了主图模板/浏览了电商案例”的人群做再营销，后续投放“电商主图｜跨境合规指南”等软内容，再慢慢引到你的农机业务。

这样既不污染 AI 站品牌，又能把相关用户筛出来。

变现顺序（“先有流量，再赚一点点”）

邮件与社群（第 1 周就能做）：用“Prompt 包/样张包”做引导，Newsletter 每周一期聚合“本周最佳案例与 Prompt”，广告位或联盟从第 2 周开始接。

联盟/广告（第 2 周）：域名/主机/CDN、图床、图库、设计工具、AIGC 平台（AI Studio 教程内可带“工具清单”）。

资料小单品（第 2–3 周）：

《Nano Banana 100 Prompt 模板（中英双语）》$9

《电商主图工作流（含构图模板/LUT）》$19

轻 SaaS 小工具（第 3–4 周）：Prompt 拼装器 / 多图融合工作流（前端免费，登录后可导出 JSON/复制到 Gemini）。

赞助评测（第 4 周+）：接受第三方图像工具/图库/插件的赞助评测（清晰标注“赞助”）。

成功关键点（别跳过）

“外号 + 正式名”双标签：标题、H1、元描述同时覆盖“Nano Banana / Gemini 2.5 Flash Image”，能吃两边流量。
Google 开发者博客

引用权威：每篇关键页都嵌入 Google 官方博文、AI Studio 与 LMArena 的引用块（日期标注）。
Google 开发者博客
blog.google
Google AI Studio
LMArena

合规声明 & 水印态度：明确“不提供去水印、保留可见/不可见水印”立场，减少风险。
Google 开发者博客

内容速度：前 14 天保证每日 2–3 篇+短视频 1 条的节奏；SERP 初期拿对比页/教程长尾先起量，主页等慢慢拉。

技术底座：极致首屏（CDN+图像懒加载），Schema、站点地图、GSC/必应站长工具、404 & 301、英文/中文路由分离。

你现在就可以做的 10 件事（今天内完成）

选域名并开 Cloudflare（www 与根域 301 规范化）。

起 Next.js/WordPress 空站并装上 SEO/Schema/图像优化插件。

首页搭骨架＋“非官方声明”黄条。

上线 10 篇首发（上面列的 6+4）。

做 30 张前后对比样张（含参数与原图）。

发布 Medium/知乎同名文章（寄生页），把对比关键词写进标题。

B 站/抖音/小红书/YouTube 发 3 支 30–60 秒剪辑。

GitHub 建“样张 & Prompt 数据集”仓库。

站内放 Prompt 包订阅表单，配置自动邮件。

提交 Sitemap 到 GSC/必应站长，开日志采集观察抓取频率。

如果你要“更快更猛”

开一个“每日榜单快照”固定栏目，引用 LMArena 最新排名与你当天点评（标日期）。这类“新闻型内容”很容易被 Discover/资讯源抓取。
LMArena

少量投放“教程/对比”类关键词广告，配 A/B 两版落地页测试转化（订阅/下载率）。

Medium/Reddit/HN/PH 同步发，主站承接“深内容与工具”，形成回环导流。

小结

姿势：不扮官方，做“非官方权威指南 + 工具 + 对比”中枢。

路径：社媒/寄生 + 程序化长尾 + 权威引用 → 搜索位次推进；像素分群→后续再营销。

与外贸的连接：做“电商主图/行业案例/模板”自然引流，别硬转售卖。

变现顺序：先订阅/联盟→资料包→轻工具→赞助评测。

我可以直接给你：① 首页与 10 篇首发文章的大纲与 SEO 标题/描述；② 200 条“对比页”程序化路由清单；③ 30 张样张拍板清单与对应 Prompt；④ Newsletter 欢迎信 + 3 封自动邮件模版。你点头，我就一并吐出来，照着发就行。