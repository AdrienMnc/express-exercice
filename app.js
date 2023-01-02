const express = require("express");
const unitsRouter = require("./routes/units");
const convertRouter = require("./routes/convert");
const checkHeader = require("./middleware/checkHeader");
// const blockGetPost = require("./middleware/blockGetPost");
const login = require("./routes/loginRouter");
const auth = require("./middleware/tokenVerif");

const app = express();

app.use(express.json());
app.use("/units", auth.tokenVerif, unitsRouter);
app.use("/login", login);
app.use(checkHeader.isHeader);
// app.use(blockGetPost.blockGetPost);

app.use("/convert", convertRouter);

module.exports = app;
