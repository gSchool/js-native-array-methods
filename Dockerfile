# Start from the official node image: https://hub.docker.com/_/node
FROM node:16.5-slim

# Makes directory and changes it to working directory
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Add package.json from upstream 
COPY package.json ./

# Install dependencies
RUN npm install

# Student code from their fork submitted in Learn (overwrites previously added package.json)
ARG SUBMISSION_SUBFOLDER
COPY $SUBMISSION_SUBFOLDER ./

# Overwrite anything the student shouldn't touch
COPY package.json ./
COPY test /app/test

# Always overwrite the test script that Learn will run
COPY test.sh ./
