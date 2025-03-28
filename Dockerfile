FROM node:18-alpine

# Set environment variable for debug mode
ENV DEBUG=true

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Define default command
CMD ["npm", "run", "dev"]