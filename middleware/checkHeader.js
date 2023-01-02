//verifier le header de la requète
module.exports = {
  isHeader(req, res, next) {
    const header = req.headers["content-type"];
    if (header !== "application/json") {
      res.status(400).send({ message: "Bad request" });
    } else {
      next();
    }
  },
};
