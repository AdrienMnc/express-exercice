const units = require("../data/units.json");

/* Units Controller */
module.exports = {
  /**
   * Get units
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  getUnits(req, res) {
    res.json(units);
  },

  exists(req, res) {
    const { unit } = req.params;

    if (!unit) {
      res.status(422).json({ message: "Missing required fields." });
      return;
    }

    let exists = false;

    for (const type in units) {
      if (units[type].includes(unit)) {
        exists = true;
        break;
      }
    }

    res.json({ exists });
  },
};
