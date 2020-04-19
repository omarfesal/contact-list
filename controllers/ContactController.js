const ContactService = require("../services/ContactService");

const addContact = async (req, resp) => {
	const body = req.validatedBody;
	const { currentUser } = req;
	await ContactService.addNewContact(body, currentUser["id"])
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

const findAllContacts = async (req, resp) => {
	let { page, pageSize } = req.query;
	const { currentUser } = req;
	await ContactService.findAllContacts({ page, pageSize }, currentUser["id"])
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

const getRecentContacts = async (req, resp) => {
	let { limit } = req.query;
	const { currentUser } = req;
	await ContactService.findRecentContacts(limit, currentUser["id"])
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
	findAllContacts,
	getRecentContacts,
};
