const addContact = async (req, resp) => {
	return resp.status(200).json({ message: "data added successfully" });
};

module.exports = {
	addContact,
};
