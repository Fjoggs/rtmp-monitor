FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    && npm install \
    && apk del .gyp

# Bundle app source
COPY . .

EXPOSE 4000

# defined in package.json
CMD [ "npm", "start" ]

