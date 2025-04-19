FROM node:23-bookworm-slim

WORKDIR /app

# Copy dependency manifest files first (for better Docker layer caching)
COPY package.json pnpm-lock.yaml ./

# Enable Corepack and prepare the latest pnpm version
# This avoids installing pnpm globally and uses the version from packageManager field if present
RUN corepack enable && corepack prepare pnpm@10.8.1 --activate

# Skip the postinstall scripts to avoid running some build steps this early
RUN pnpm install --ignore-scripts

COPY . .

# Build the Nuxt 3 application (outputs to .output/ by default,
# or to the directory configured via buildDir in nuxt.config)
# https://nuxt.com/docs/api/nuxt-config#builddir
RUN pnpm build

EXPOSE 3000 

CMD ["node", ".output/server/index.mjs"]