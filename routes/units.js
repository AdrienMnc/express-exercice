const express = require("express");
const router = express.Router();
const unitsController = require("../controllers/unitsController");

/* Routes */

// GET /units
router.get("/", unitsController.getUnits);

// GET /units/exists/:unit
router.get("/exists/:unit", unitsController.exists);

module.exports = router;
