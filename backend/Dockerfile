# Use a Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
