require("dotenv").config();

module.exports = {
	development: {
		username: "root",
		password: "123456",
		database: "contact",
		host: "127.0.0.1",
		dialect: "mysql",
		logging: process.env.DB_LOGGING === "true" ? console.log : false,
	},
	test: {
		username: "root",
		password: "123456",
		database: "contact",
		host: "127.0.0.1",
		dialect: "mysql",
		logging: console.log,
	},
	production: {
		// for production config
	},
};
