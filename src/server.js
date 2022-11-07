const express = require("express");
const { getAllCards, getCardByID } = require("./controllers/card.controller");

const app = express();

app.set("json spaces", 2);

app.get("/cards", getAllCards);

app.get("/cards/:cardId", getCardByID);

// for all 404s

app.use("*", (req, res) => {
  res.status(404).send({ msg: "Not found!" });
});
module.exports = { app };
