FROM node:16

WORKDIR /usr/src/app


COPY ./nodejs-sample/package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY ./nodejs-sample .

CMD [ "node", "index.js" ]