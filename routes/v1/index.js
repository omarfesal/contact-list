const express = require("express");
const router = express.Router();
const doc = require("./doc");
const contact = require("./contact");

router.use("/doc", doc);
router.use("/contacts", contact);

module.exports = router;
