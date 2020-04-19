require("dotenv").config();

DB_username = "root";
DB_password = "123456";
DB_name = "contact";
DB_host = "127.0.0.1";
DB_LOGGING = "true";

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
