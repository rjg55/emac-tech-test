const { fetchAllCards, fetchCardByID } = require("../models/card.model");

exports.getAllCards = async (req, res) => {
  try {
    const response = await fetchAllCards();
    res.status(200).send({ cards: response });
  } catch (err) {
    next(err);
  }
};

exports.getCardByID = async (req, res, next) => {
  const { cardId } = req.params;
  try {
    const response = await fetchCardByID(cardId);
    res.status(200).send({ card: response });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
