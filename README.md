# 完整 Vue3 项目模板（pnpm + Vuetify + 权限 + API + Docker）

## 安装/测试

```bash
pnpm install
pnpm run dev
```

## ~~生产构建 & Docker~~

```bash
pnpm run build
docker build -t vue-app .
docker run -p 8080:80 vue-app
```

默认用户名：admin
密码：123456

## 部署思路：

- 前后端分离项目，使用 **Docker 部署前端**
- 已有：
  - ✅ 后端容器服务（例如 API 服务）
  - ✅ 云服务器上部署的独立 Nginx（用于反向代理）
  - ✅ GitHub Actions CI/CD（实现自动构建/部署）

前端部署只负责构建静态文件，通过 Docker 构建 → 上传服务器静态目录 → 被已有 nginx 托管

```
[前端代码] --> GitHub Actions --> Docker 构建 dist/ --> scp 到服务器
                                                ↓
                                      云服务器独立 Nginx 托管静态资源

```
