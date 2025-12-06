# ---------- Build Stage ----------
FROM node:lts-alpine AS builder

WORKDIR /app

# Only copy dependency files first to enable caching. Because when change any dependencies, then only re-run npm ci
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the Vite production assets
RUN npm run build


# ---------- Server Stage ----------
FROM nginx:stable-alpine

# Copy built files from builder stage to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Optional: run nginx as non-root user
USER nginx
