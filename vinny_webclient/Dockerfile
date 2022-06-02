FROM node:alpine

# Set working directory
WORKDIR /src/

# Copy packeage files and run npm i. This allows for dependencies to be cached.
COPY package.json .
RUN npm i

# Copy over the rest of the files
COPY . .

# Run build
RUN npm run build

# Expose port
EXPOSE 3003

# Once build is finished, serve result
CMD node server.js

