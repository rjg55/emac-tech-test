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
  describe("ERROR HANDLING", () => {
    test("status 404: not found", () => {
      return request(app)
        .get("/caaards")
        .expect(404)
        .then(({ body }) => {
          expect(body).toEqual({ msg: "Not found!" });
        });
    });
  });
});

describe("/cards/:cardId", () => {
  describe("GET", () => {
    test("status 200 - responds with a single object identified by its ID", () => {
      return request(app)
        .get("/cards/card001")
        .expect(200)
        .then(({ body }) => {
          expect(typeof body.card).toEqual("object");
          expect(body.card).toEqual(
            expect.objectContaining({
              title: "card 1 title",
              sizes: ["sm", "md", "gt"],
              basePrice: 200,
              pages: [
                { title: "Front Cover", templateId: "template001" },
                { title: "Inside Left", templateId: "template002" },
                { title: "Inside Right", templateId: "template003" },
                { title: "Back Cover", templateId: "template004" },
              ],
              card_id: "card001",
              imageUrl: "/front-cover-portrait-1.jpg",
            })
          );
        });
    });
  });
  describe("ERROR HANDLING", () => {
    test("status 400 - bad request. input is not a number", () => {
      return request(app)
        .get("/cards/battenberg")
        .expect(400)
        .then(({ body }) => {
          expect(body).toEqual({
            status: 400,
            msg: "Not a valid cardID",
          });
        });
    });
  });
});
