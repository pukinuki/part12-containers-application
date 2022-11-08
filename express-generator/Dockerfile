FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci 

ENV DEBUG=express-generator:*

USER node

CMD npm start
