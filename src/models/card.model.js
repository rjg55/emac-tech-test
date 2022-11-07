const cards = require("../data/cards.json");
const { findImageFromTemplate } = require("../utils/utils.js");

exports.fetchAllCards = () => {
  const filteredCards = cards.map((card) => {
    return {
      card_id: card.id,
      title: card.title,
      template: card.pages[0].templateId,
    };
  });
  const response = findImageFromTemplate(filteredCards);
  return response;
};
