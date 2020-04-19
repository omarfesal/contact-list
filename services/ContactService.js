const { Contact } = require("../models");
const { paginate } = require("../utils/paginate");

const addNewContact = async (contact, owner) => {
	return await Contact.create({ ...contact, userId: owner });
};

const findAllContacts = async ({ page, pageSize }, owner) => {
	return await Contact.findAll({
		where: { userId: owner },
		...paginate(page, pageSize),
		attributes: { exclude: ["UserId"] },
	});
};

const findRecentContacts = async (limit = 5) => {
	return await Contact.findAll({
		order: [["createdAt", "DESC"]],
		limit: parseInt(limit),
	});
};

module.exports = { addNewContact, findAllContacts, findRecentContacts };
