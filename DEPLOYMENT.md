# 部署指南 - nanobananaguide.ai

## 上线步骤

### 1. GitHub 上传（用户操作）
```bash
# 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit - nanobananaguide.ai v1.0"

# 创建 GitHub 仓库并推送
# 1. 在 GitHub 创建新仓库：nanobananaguide-ai
# 2. 推送代码
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nanobananaguide-ai.git
git push -u origin main
```

### 2. Vercel 部署（我来指导）
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择 nanobananaguide-ai 仓库
5. 配置环境变量：
   - `FAL_KEY`: 你的 FAL AI API 密钥
   - `NEXT_PUBLIC_APP_URL`: https://nanobananaguide.ai
6. 点击 Deploy

### 3. 域名配置（用户操作）
1. 在 Vercel 项目设置中添加自定义域名：nanobananaguide.ai
2. 在域名注册商处设置 DNS 记录：
   - A 记录：@ → 76.76.19.61
   - CNAME 记录：www → cname.vercel-dns.com

### 4. 环境变量配置
生产环境需要的环境变量：
- `FAL_KEY`: FAL AI API 密钥（必需）
- `NEXT_PUBLIC_APP_URL`: https://nanobananaguide.ai

### 5. SEO 优化（我来操作）
- Google Search Console 验证
- Google Analytics 配置
- 站点地图提交
- robots.txt 验证

## 检查清单
- [ ] 代码推送到 GitHub
- [ ] Vercel 部署成功
- [ ] 域名解析配置
- [ ] 环境变量设置
- [ ] SSL 证书自动配置
- [ ] 网站功能测试
- [ ] SEO 配置完成

## 注意事项
1. 确保 FAL AI API 密钥有效且有足够配额
2. 域名解析可能需要 24-48 小时生效
3. Vercel 会自动配置 SSL 证书
4. 首次部署后测试所有页面功能