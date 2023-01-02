const jwt = require("jsonwebtoken");

//récupérer un nom d'utilisateur et un mot de passe depuis le body envoyé par le client
module.exports = {
  login(req, res) {
    const { username, password } = req.body;
    //vérifier que le nom d'utilisateur et le mot de passe sont fournis
    if (!username || !password) {
      res.status(401).send({ message: "Missing username or password" });
    } else {
      //si le mot de passe reçu est égal à ”1234" alors générez un JWT contenant le nom
      //de l'utilisateur avec la clef secrete de votre choix et expirant dans 24h
      if (password === "1234") {
        const token = jwt.sign({ username }, "secret key", {
          expiresIn: "24h",
        });

        res.status(200).send({ token });
      } else {
        res.status(401).send({ message: "Invalid password" });
      }
    }
  },
};
