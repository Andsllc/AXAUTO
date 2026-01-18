FROM node:20-slim

WORKDIR /app

# 依存関係
COPY package*.json ./
RUN npm ci --omit=dev

# アプリ本体
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]
