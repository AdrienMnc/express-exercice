/**
 * Protégez maintenant l’accès à toutes les autres routes avec la vérification de la validité
 * du JWT via un middleware.
 */

const jwt = require("jsonwebtoken");

module.exports = {
  tokenVerif(req, res, next) {
    const token = String(req.get("Authorization")).split(" ")[1];
    if (token) {
      /* Décryptage du token */
      jwt.verify(token, "secret key", (err, data) => {
        if (err) {
          res.status(401).json({ message: "Invalid token" });
        } else {
          next();
        }
      });
    } else {
      res.status(401).json({ message: "Missing token" });
    }
  },
};
