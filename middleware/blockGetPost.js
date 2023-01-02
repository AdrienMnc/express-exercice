//middleware bloquant toutes les requêtes GET et POST
module.exports = {
  blockGetPost(req, res, next) {
    if (req.method != "GET" || req.method === "POST") {
      res.status(405).send({ message: "GET or POST not allowed" });
    } else {
      next();
    }
  },
};
