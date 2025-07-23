# ⏱️ 使用更快更全的基础镜像
FROM node:20 AS build
WORKDIR /app

# ✅ 单独复制依赖文件以使用缓存
COPY package.json pnpm-lock.yaml ./

# 📦 设置 pnpm 源并安装依赖（缓存层）
RUN npm install -g pnpm \
 && pnpm config set registry https://registry.npmmirror.com \
 && pnpm install

# 🚚 再复制完整项目（避免频繁失效缓存）
COPY . .

# 🔧 编译生产包
RUN pnpm run build

# ✅ 使用 nginx 提供静态文件
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
# ----------- 1. 构建阶段（build stage）-----------
  FROM node:20-alpine AS builder

  # 设置工作目录
  WORKDIR /app
  
  # 加速构建：先复制依赖文件，启用 Docker 缓存
  COPY package.json pnpm-lock.yaml ./
  
  # 安装 pnpm，设置镜像源，加速依赖下载
  RUN npm install -g pnpm \
    && pnpm config set registry https://registry.npmmirror.com \
    && pnpm install --frozen-lockfile
  
  # 再复制完整代码（避免缓存失效）
  COPY . .
  
  # 构建生产版本
  RUN pnpm run build
  
  
  # ----------- 2. 部署阶段（使用 nginx）-----------
  FROM nginx:stable-alpine AS production
  
  # 删除默认配置（可选）
  RUN rm -rf /etc/nginx/conf.d/default.conf
  
  # 添加自定义 nginx 配置（如有）
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  
  # 拷贝构建好的静态文件
  COPY --from=builder /app/dist /usr/share/nginx/html
  
  # 开放端口
  EXPOSE 80
  
  # 启动 nginx
  CMD ["nginx", "-g", "daemon off;"]
  