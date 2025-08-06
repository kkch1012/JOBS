# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN npm install --omit=dev --legacy-peer-deps

# Copy source code
COPY . .

# Build the app with environment variables
ARG REACT_APP_API_BASE_URL
ARG REACT_APP_API_URL
ARG REACT_APP_MCP_URL

ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_MCP_URL=$REACT_APP_MCP_URL

# Set Node.js to use legacy OpenSSL provider
ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 