# Contact list

Its Restful API to get & manipulate user contact data

## Getting started

#### prequesites

- node `v12.16.2`
- mysql **recommended:`v8.0.16`**

#### Run Project

1. git clone `https://github.com/omarfesal/contact-list.git`
2. cd `contact-list`
3. `npm i` to install dependencies
4. create database schema with name `contact` **Note:** open `config/config.js` to see config about credentials
5. `npm run migrate` to create db tables
6. `npm run seed` to insert intial data
7. `npm run start` to start project locally

After project run,

APP API should be available through `http://localhost:4000/api/v1`

You can open Documentation through `http://localhost:4000/api/v1/doc/api-docs`

#### Run project with docker

1. Make Sure Docker running
2. make sure you're in `contact-list`
3. Run `docker-compose up`

It will create image for node app and create image for mysql and will make migration and seed automatically

APP API should be available through `http://127.0.0.1:8090/api/v1`
You can open Documentation through `http://127.0.0.1:8090/api/v1/doc/api-docs`

### Run Test Suites

`npm run test`
