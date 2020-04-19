const { Contact } = require("../models");

const addNewContact = async (contact) => {
	return await Contact.create(contact);
};

module.exports = { addNewContact };
