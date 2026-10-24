FROM node:24-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
COPY scripts ./scripts
ARG APP_VERSION=dev
RUN APP_VERSION=$APP_VERSION node scripts/build.js
USER node
EXPOSE 8080
CMD ["node", "src/server.js"]
