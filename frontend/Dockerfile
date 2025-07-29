# Use a Node.js image to build the React app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies first (for caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the code and build the app
COPY . .
RUN npm run build

# Use a lightweight web server to serve static files
FROM nginx:alpine

# Copy the build output from the previous step
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default for nginx)
EXPOSE 80

# ⬇️ Add the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]