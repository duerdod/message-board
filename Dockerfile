FROM node:11-alpine

WORKDIR /board

COPY package*.json ./

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]