const express = require("express");
const router = express.Router();

const {
  Register,
  Login,
} = require("../Controller/UserRegistraControl");

router.post("/Register", Register);
router.post("/Login", Login);

module.exports = router;