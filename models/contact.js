"use strict";
module.exports = (sequelize, DataTypes) => {
	const Contact = sequelize.define(
		"Contact",
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			mobile: DataTypes.STRING,
		},
		{}
	);
	Contact.associate = function (models) {
		Contact.belongsTo(models.User);
	};
	return Contact;
};
