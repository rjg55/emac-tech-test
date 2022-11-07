const templates = require("../data/templates.json");

exports.findImageFromTemplate = (cards) => {
  const replaceTempWithImg = cards.map((card) => {
    const newCard = { ...card };
    const templateById = templates.find((template) => {
      return template.id === card.template;
    });
    const imageUrl = templateById.imageUrl;
    newCard.imageUrl = imageUrl;
    delete newCard.template;
    return newCard;
  });
  return replaceTempWithImg;
};
