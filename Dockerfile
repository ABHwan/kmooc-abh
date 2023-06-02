# Dockerfile
FROM node:latest

RUN #npm install -g yarn

WORKDIR /usr/src/app
COPY package*.json ./app
RUN yarn

COPY . .

CMD ["yarn", "serve"]