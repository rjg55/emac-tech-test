const cards = [
  {
    card_id: "card001",
    title: "card 1 title",
    template: "template001",
  },
  {
    card_id: "card002",
    title: "card 2 title",
    template: "template005",
  },
  {
    card_id: "card003",
    title: "card 3 title",
    template: "template006",
  },
];

const { findImageFromTemplate } = require("../utils/utils");

describe("findImageFromTemplate", () => {
  test("should return an array", () => {
    const input = cards;

    const actual = Array.isArray(findImageFromTemplate(input));
    const expected = true;

    expect(actual).toEqual(expected);
  });
  test("should return a new array", () => {
    const input = cards;

    const actual = findImageFromTemplate(input);

    expect(actual).not.toBe(input);
  });
  test("should not mutate original array", () => {
    const input = [
      {
        card_id: "card001",
        title: "card 1 title",
        template: "template001",
      },
      {
        card_id: "card002",
        title: "card 2 title",
        template: "template005",
      },
      {
        card_id: "card003",
        title: "card 3 title",
        template: "template006",
      },
    ];

    findImageFromTemplate(input);
    expect(input).toEqual([
      {
        card_id: "card001",
        title: "card 1 title",
        template: "template001",
      },
      {
        card_id: "card002",
        title: "card 2 title",
        template: "template005",
      },
      {
        card_id: "card003",
        title: "card 3 title",
        template: "template006",
      },
    ]);
  });
  test("should return an object that has had the template key replaced with the correct image URL for array.length = 1", () => {
    const input = [
      {
        card_id: "card001",
        title: "card 1 title",
        template: "template001",
      },
    ];

    const actual = findImageFromTemplate(input);
    const expected = [
      {
        card_id: "card001",
        title: "card 1 title",
        imageUrl: "/front-cover-portrait-1.jpg",
      },
    ];

    expect(actual).toEqual(expected);
  });
  test("should return an object that has had the template key replaced with the correct image URL for array.length >= 1", () => {
    const input = cards;

    const actual = findImageFromTemplate(input);
    const expected = [
      {
        title: "card 1 title",
        imageUrl: "/front-cover-portrait-1.jpg",
        card_id: "card001",
      },
      {
        title: "card 2 title",
        imageUrl: "/front-cover-portrait-2.jpg",
        card_id: "card002",
      },
      {
        title: "card 3 title",
        imageUrl: "/front-cover-landscape.jpg",
        card_id: "card003",
      },
    ];

    expect(actual).toEqual(expected);
  });
});
