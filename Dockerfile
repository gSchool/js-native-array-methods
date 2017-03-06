FROM node:latest

# Create directory for app
# Set as current directory for RUN, ADD, COPY commands
RUN mkdir /app
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# add package.json to WORKDIR and install
# This step is split out from the rest of the repo to optimize cache hits
ADD package.json .
RUN npm install

# add complete local repo to WORKDIR
ADD . .

# If necessary, add command here to clear logs. Only output to std out after this line will be displayed in Learn.

# test
RUN npm test
