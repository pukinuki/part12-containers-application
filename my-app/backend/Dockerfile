FROM node:19

WORKDIR /usr/src/app

COPY . .

RUN npm ci

USER node

CMD npm start
