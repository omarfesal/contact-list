const joi = require("joi");

module.exports = joi.object().keys({
	email: joi.string().email().required(),
	mobile: joi.string().trim().required(),
	firstName: joi.string().trim().required(),
	lastName: joi.string().trim().required(),
});
