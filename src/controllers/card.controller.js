const { fetchAllCards } = require("../models/card.model");

exports.getAllCards = (req, res) => {
  console.log("im in the controller");
  fetchAllCards();
};
