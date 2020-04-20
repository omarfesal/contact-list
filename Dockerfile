FROM node:12.16.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm run migrate
RUN npm run seed

COPY . .

EXPOSE 8090

CMD [ "node", "bin/www" ]
