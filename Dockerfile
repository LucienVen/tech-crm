FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

# 注入构建时间和 Git 提交信息
ARG GIT_COMMIT=dev
ARG BUILD_TIME=unknown
ENV GIT_COMMIT=$GIT_COMMIT
ENV BUILD_TIME=$BUILD_TIME

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install
RUN GIT_COMMIT=$GIT_COMMIT BUILD_TIME=$BUILD_TIME pnpm build