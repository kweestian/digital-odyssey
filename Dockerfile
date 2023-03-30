# 1. Install dependencies only when needed
FROM node:16-alpine AS builder

ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN yarn global add pnpm 

COPY ./package.json ./pnpm-lock.yaml ./.env ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm  build


# 2. Production image, copy all the files and run next
FROM node:16-alpine AS runner

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

ENV NODE_ENV=production
ENV VIRTUAL_HOST=staging-digital-odyssey.enverselabs.com
ENV VIRTUAL_PORT=4010
ENV LETSENCRYPT_HOST=staging-digital-odyssey.enverselabs.com

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4010

ENV PORT 4010


CMD ["node", "server.js"]

