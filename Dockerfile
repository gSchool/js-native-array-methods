# Install latest version of node
FROM node:latest

# Create directory for app
RUN mkdir /app

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Set SUBMISSION_SUBFOLDER build-arg
ARG SUBMISSION_SUBFOLDER

# Add code to be tested
ADD ./$SUBMISSION_SUBFOLDER /app

# Use submission package.json to install dependencies
RUN npm install

# Overwrite files in submission repository with instructor files
ADD test.sh /app
ADD test /app/test
ADD ./package.json /app
