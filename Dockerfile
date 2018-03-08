# Install latest version of node
FROM node:latest

# Create directory for app
RUN mkdir /app

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Add package.json to WORKDIR and install
ADD package.json /app

# Install dependencies
RUN npm install

# Add student code
COPY submission.txt /app/src/every.js

# test
RUN npm test