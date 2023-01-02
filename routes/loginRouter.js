const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

//Route POST /login
router.post("/", loginController.login);

module.exports = router;
