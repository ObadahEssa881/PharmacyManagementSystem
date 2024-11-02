const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// routes:
router.post("/login", authController.login);
module.exports = router;
