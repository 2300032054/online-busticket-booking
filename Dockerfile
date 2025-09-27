# Step 1: Use a Node image to build the React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Build the React project
RUN npm run build

# Step 2: Use Nginx to serve the build
FROM nginx:alpine

# Copy the build folder from previous step to nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
