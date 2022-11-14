FROM node:16

WORKDIR /usr/src/server

COPY . .

RUN npm install

USER node

CMD ["npm","run","dev"]
