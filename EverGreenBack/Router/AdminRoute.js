const express = require("express");

const router = express.Router();

const {
  createAdmin,
  adminLogin,
  forgotPassword,
  resetPassword,
} = require("../Controller/AdminController");

router.post("/admin", createAdmin);
router.post("/login", adminLogin);

router.post("/forgotpassword", forgotPassword);

router.post("/resetpassword/:token", resetPassword);

module.exports = router;