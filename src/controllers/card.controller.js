const { fetchAllCards } = require("../models/card.model");

exports.getAllCards = async (req, res) => {
  try {
    const response = await fetchAllCards();
    res.status(200).send({ cards: response });
  } catch (err) {
    console.log(err);
  }
};
