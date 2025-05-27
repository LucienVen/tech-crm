# 完整 Vue3 项目模板（pnpm + Vuetify + 权限 + API + Docker）

## 安装

```bash
pnpm install
pnpm run dev
```

## 生产构建 & Docker

```bash
pnpm run build
docker build -t vue-app .
docker run -p 8080:80 vue-app
```

默认用户名：admin  
密码：123456
