const express = require("express");
const { getAllCards } = require("./controllers/card.controller");

const app = express();

app.set("json spaces", 2);

app.get("/cards", getAllCards);

app.get("/cards/:cardId/:sizeId?", () => {
  // respond with card by id
});

module.exports = app;
