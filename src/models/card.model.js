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

exports.fetchCardByID = (cardId) => {
  const singleCardFromId = cards.filter((card) => {
    const copiedCard = { ...card };
    return copiedCard.id === cardId;
  });
  singleCardFromId[0].card_id = cardId;
  singleCardFromId[0].template = singleCardFromId[0].pages[0].templateId;
  delete singleCardFromId[0].id;
  const replaceTempWithImg = findImageFromTemplate(singleCardFromId);
  return replaceTempWithImg[0];
};
