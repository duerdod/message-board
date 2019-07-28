FROM node:11-alpine

WORKDIR /board-api

COPY package.json ./

RUN yarn install

EXPOSE 8000

CMD [ "yarn", "dev" ]