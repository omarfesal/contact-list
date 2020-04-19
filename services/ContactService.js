const { Contact } = require("../models");
const { paginate } = require("../utils/paginate");

const addNewContact = async (contact) => {
	return await Contact.create(contact);
};

const findAllContacts = async (page, pageSize) => {
	return await Contact.findAll(paginate(page, pageSize));
};

const findRecentContacts = async (limit = 5) => {
	return await Contact.findAll({
		order: [["createdAt", "DESC"]],
		limit: parseInt(limit),
	});
};

module.exports = { addNewContact, findAllContacts, findRecentContacts };
