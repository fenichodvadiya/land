const express = require("express");
const router = express.Router();

const {
  AddContact,
  GetContacts,
  DeleteContact,
} = require("../Controller/ContactController");

router.post(
  "/addcontact",AddContact);

router.get(
  "/get-contacts",
  GetContacts
);

router.delete(
  "/delete-contact/:id",
  DeleteContact
);

module.exports = router;