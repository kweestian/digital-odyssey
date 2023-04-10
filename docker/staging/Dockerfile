# 1. Install dependencies only when needed
FROM node:16-alpine AS deps

ARG VIRTUAL_HOST
ARG VIRTUAL_PORT
ARG LETSENCRYPT_HOST
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN yarn global add pnpm 

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# 2. Build image, build all soruce code
FROM node:16-alpine AS builder

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production



WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# 3. Production image, copy all the files and run next
FROM node:16-alpine AS runner

ENV NEXT_TELEMETRY_DISABLED=1

ENV VIRTUAL_HOST=${VIRTUAL_HOST}
ENV VIRTUAL_PORT=${VIRTUAL_PORT}
ENV LETSENCRYPT_HOST=${LETSENCRYPT_HOST}
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}


WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4009

ENV PORT 4010


CMD ["node", "server.js"]
