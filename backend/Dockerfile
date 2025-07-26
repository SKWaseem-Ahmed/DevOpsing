# Use official Node.js LTS base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the app port
EXPOSE 5050

# Start the app
CMD ["npm", "start"]