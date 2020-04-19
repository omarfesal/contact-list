const joi = require("joi");

module.exports = joi.object().keys({
	email: joi.string().email().required(),
	mobile: joi.string().trim().required(),
	firstName: joi.string().trim().required(),
	lastName: joi.string().trim().required(),
	authorization: joi.string().trim().required(),
	deviceToken: joi.string().trim().required(),
	fingerPrint: joi.string().trim().required(),
});
