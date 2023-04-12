# 1. Install dependencies only when needed
FROM node:16-alpine AS deps



RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN yarn global add pnpm 

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# 2. Build image, build all soruce code
FROM node:16-alpine AS builder


ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

ARG VIRTUAL_HOST
ARG VIRTUAL_PORT
ARG LETSENCRYPT_HOST

ENV VIRTUAL_HOST=${VIRTUAL_HOST}
ENV VIRTUAL_PORT=${VIRTUAL_PORT}
ENV LETSENCRYPT_HOST=${LETSENCRYPT_HOST}

RUN echo $NEXT_PUBLIC_SUPABASE_ANON_KEY


WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# 3. Production image, copy all the files and run next
FROM node:16-alpine AS runner



WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.env /app/.env


# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4009

ENV PORT 4010


CMD ["node", "server.js"]
