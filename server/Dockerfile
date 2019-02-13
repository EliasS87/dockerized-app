FROM node:latest

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY . .

RUN apt-get update
RUN npm install

ENV DEBUG=app-server:*
CMD npm start



