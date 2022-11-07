const { app } = require("../server");
const request = require("supertest");

// test('returns matching card title', async () => {
//   const response = await request(app).get('/cards/card001')

//   expect(response.status).toBe(200)
//   expect(response.body).toEqual(expect.objectContaining({
//     title: 'card 1 title',
//   }))
// })

describe("/cards", () => {
  describe("GET", () => {
    test("status 200: responds with an array of card objects. Containing card_id, title & image_url", () => {
      return request(app)
        .get("/cards")
        .expect(200)
        .then(({ body }) => {
          expect(Array.isArray(body.cards)).toEqual(true);
          expect(body.cards.length).toEqual(3);
          expect(body.cards[0]).toEqual(
            expect.objectContaining({
              title: "card 1 title",
              card_id: "card001",
              imageUrl: "/front-cover-portrait-1.jpg",
            })
          );
        });
    });
  });
});
