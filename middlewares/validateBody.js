const _ = require("lodash");
const joi = require("joi");

module.exports = (
	joiSchema,
	property = "body",
	reqProp = "validatedBody"
) => async (req, res, next) => {
	const computedProp = _.isFunction(property) ? property(req) : req[property];
	try {
		const body = await joi.validate(computedProp, joiSchema);
		req[reqProp] = body;

		return next();
	} catch (err) {
		return res.status(400).json({
			message: err.message || "Bad Request",
		});
	}
};
