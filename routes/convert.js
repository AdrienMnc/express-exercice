const express = require("express");
const router = express.Router();
const conversionsController = require("../controllers/conversionsController");

/* Routes */

// GET /convert/temperture
router.post("/temperature", conversionsController.convertTemperatures);

// GET /convert/currencies
router.post("/currency", conversionsController.convertCurrencies);

module.exports = router;
