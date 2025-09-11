# Google Search Console 设置指南

## 1. 验证网站所有权

### 方法一：HTML 文件验证（推荐）
1. 登录 [Google Search Console](https://search.google.com/search-console/)
2. 点击「添加资源」
3. 选择「网址前缀」，输入：`https://nanobananaguide.com`
4. 选择「HTML 文件」验证方法
5. 下载验证文件并上传到网站根目录
6. 点击「验证」

### 方法二：HTML 标签验证
已在 `public/google-site-verification.html` 中添加验证标签：
```html
<meta name="google-site-verification" content="your-verification-code-here" />
```

### 方法三：Google Analytics 验证
由于已集成 Google Analytics (G-2JBQX8HQMR)，可直接使用 GA 验证。

## 2. 提交站点地图

验证成功后，提交以下站点地图：
- 主站点地图：`https://nanobananaguide.com/sitemap.xml`
- 图片站点地图：`https://nanobananaguide.com/sitemap-images.xml`（如有）
- 新闻站点地图：`https://nanobananaguide.com/sitemap-news.xml`（如有）

## 3. 设置目标受众

在 Search Console 中设置：
- **主要国家/地区**：中国
- **主要语言**：中文（简体）
- **次要市场**：美国、日本、韩国

## 4. 配置搜索外观

### 结构化数据
已在网站中实现以下结构化数据：
- WebSite（网站信息）
- Article（文章页面）
- HowTo（教程页面）
- FAQPage（常见问题）
- BreadcrumbList（面包屑导航）

### 富媒体结果
- 文章卡片
- 操作指南
- 常见问题
- 面包屑导航

## 5. 监控关键指标

### 搜索性能
重点关注以下关键词：
- "AI图像编辑"
- "图像处理工具"
- "AI修图软件"
- "背景移除工具"
- "图像增强AI"
- "Photoshop替代品"

### 覆盖率
监控以下页面类型：
- 指南页面 (`/guide/*`)
- 教程页面 (`/tutorials/*`)
- 比较页面 (`/compare/*`)
- 案例研究 (`/cases/*`)

### 核心网页指标
- **LCP (最大内容绘制)**：< 2.5秒
- **FID (首次输入延迟)**：< 100毫秒
- **CLS (累积布局偏移)**：< 0.1

## 6. 移动设备适用性

确保所有页面通过移动设备适用性测试：
- 响应式设计
- 触摸友好的按钮
- 合适的字体大小
- 快速加载速度

## 7. 安全问题监控

定期检查：
- HTTPS 证书状态
- 恶意软件扫描
- 不安全的内容

## 8. 国际化设置

如需支持多语言：
```html
<link rel="alternate" hreflang="zh-CN" href="https://nanobananaguide.com/" />
<link rel="alternate" hreflang="en" href="https://nanobananaguide.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://nanobananaguide.com/" />
```

## 9. 定期维护任务

### 每周
- 检查搜索性能报告
- 查看新的覆盖率问题
- 监控核心网页指标

### 每月
- 分析热门搜索查询
- 优化点击率较低的页面
- 更新站点地图

### 每季度
- 全面的SEO审计
- 竞争对手分析
- 内容策略调整

## 10. 常见问题解决

### 索引问题
- 检查 robots.txt
- 确认页面可访问性
- 验证内部链接结构

### 移动端问题
- 使用移动设备友好测试工具
- 检查视口设置
- 优化触摸目标大小

### 速度问题
- 使用 PageSpeed Insights
- 优化图片大小
- 启用浏览器缓存
- 使用 CDN

## 联系信息

如需技术支持，请联系：
- 邮箱：support@nanobananaguide.com
- 技术文档：https://nanobananaguide.com/docs