FROM node:11-alpine

WORKDIR /client

COPY package*.json ./

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]