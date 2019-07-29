FROM node:11-alpine

WORKDIR /server

COPY package*.json ./

RUN yarn install

EXPOSE 8000

CMD [ "yarn", "dev" ]