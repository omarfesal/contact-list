const express = require("express");
const router = express.Router();
const validateBody = require("../../../middlewares/validateBody");
const addContactSchema = require("../contact/validation/schema/addContact");
const ContactController = require("../../../controllers/ContactController");

router.post(
	"/addContact",
	validateBody(addContactSchema),
	ContactController.addContact
);

router.post("/getlist", ContactController.findAllContacts);
module.exports = router;
