const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const credConfig = require("../config/db/cred")[env];

const db = {};

let sequelize = new Sequelize(credConfig);

fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
	if (db[modelName].hooks) {
		db[modelName].hooks(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;