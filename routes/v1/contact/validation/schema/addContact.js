const joi = require("joi");

module.exports = joi.object().keys({
	email: joi.string().email().required(),
	mobile: joi.string().trim().required(),
	firstname: joi.string().trim().required(),
	lastname: joi.string().trim().required(),
	authorization: joi.string().trim().required(),
	deviceToken: joi.string().trim().required(),
	fingerPrint: joi.string().trim().required(),
});
