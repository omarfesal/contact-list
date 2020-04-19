const ContactService = require("../services/ContactService");

const addContact = async (req, resp) => {
	const body = req.validatedBody;
	await ContactService.addNewContact(body)
		.then((data) => {
			return resp
				.status(200)
				.json({ message: "data added successfully", data });
		})
		.catch((error) => {
			console.error(error);
			return resp.status(400).json({ message: "something wrong happened" });
		});
};

module.exports = {
	addContact,
};
