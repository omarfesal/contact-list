const express = require("express");
const router = express.Router();
const validateBody = require("../../../middlewares/validateBody");
const addContactSchema = require("../contact/validation/schema/addContact");
const ContactController = require("../../../controllers/ContactController");
const isUserAuthenticated = require("../../../middlewares/authentication");

router.post(
	"/addContact",
	isUserAuthenticated,
	validateBody(addContactSchema),
	ContactController.addContact
);

router.post("/getlist", isUserAuthenticated, ContactController.findAllContacts);

router.post(
	"/getRecentList",
	isUserAuthenticated,
	ContactController.getRecentContacts
);

module.exports = router;
