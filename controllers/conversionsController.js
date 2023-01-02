const units = require("../data/units.json");
const convert = require("../lib/conversions");

/* Check payload */
function checkPayload(type, req, res) {
  const { unit, convertTo, value } = req.body;

  if (!unit || !convertTo || !value) {
    res.status(422).json({ message: "Missing required fields." });
    return false;
  }

  if (!units[type].includes(unit)) {
    res.status(422).json({ message: "Invalid origin unit." });
    return false;
  }

  if (!units[type].includes(convertTo)) {
    res.status(422).json({ message: "Invalid unit to convert to." });
    return false;
  }

  if (isNaN(value)) {
    res.status(422).json({ message: "Invalid value." });
    return false;
  }

  return true;
}

/* Conversions Controller */
module.exports = {
  convertTemperatures(req, res) {
    if (checkPayload("temperatures", req, res) === false) {
      return;
    }

    const { unit, convertTo: to, value } = req.body;

    const result = convert.temperature[unit][to](value);

    return res.json({ result });
  },

  convertCurrencies(req, res) {
    if (checkPayload("currencies", req, res) === false) {
      return;
    }

    const { unit, convertTo: to, value } = req.body;
    const result = convert.currencies[unit][to](value);

    return res.json({ result });
  },
};
