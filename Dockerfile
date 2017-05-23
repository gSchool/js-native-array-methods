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

# Add entire student fork
ADD ./$SUBMISSION_SUBFOLDER /app

# Install dependencies (using student package.json)
RUN npm install

# Overwrite files in student fork with instructor files
ADD test.sh /app
ADD test /app/test
ADD package.json /app
