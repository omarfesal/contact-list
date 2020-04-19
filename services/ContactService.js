const { Contact } = require("../models");
const { paginate } = require("../utils/paginate");

const addNewContact = async (contact) => {
	return await Contact.create(contact);
};

const findAllContacts = async (page, pageSize) => {
	return await Contact.findAll(paginate(page, pageSize));
};

module.exports = { addNewContact, findAllContacts };
