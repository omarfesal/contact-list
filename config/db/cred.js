require("dotenv").config();
module.exports = {
	development: {
		username: process.env.DB_username,
		password: process.env.DB_password,
		database: process.env.DB_name,
		host: process.env.DB_host,
		dialect: "mysql",
		logging: process.env.DB_LOGGING === "true" ? console.log : false,
	},
	test: {
		username: process.env.DB_TEST_username,
		password: process.env.DB_TEST_password,
		database: process.env.DB_TEST_name,
		host: process.env.DB_TEST_host,
		dialect: "mysql",
		logging: console.log,
	},
	production: {
		// for production config
	},
};
