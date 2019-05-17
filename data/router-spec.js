const request = require("supertest");

const router = require("./router.js");

describe("router", () => {
  describe("GET /", () => {
    it("should return an OK status code from the index route", async () => {
      it("should return 200 OK", () => {
        return request(router)
          .get("/")
          .expect(200);
      });
      it("should return a JSON object fron the index route", async () => {
        const expectedBody = { games };

        const response = await request(router).get("/");

        expect(response.body).toBe(expectedBody);
      });

      it("should return { games }", () => {
        return request(router)
          .get("/")
          .then(res => {
            expect(res.body).toBe("games");
          });
      });

      it("should return a JSON object fron the index route", async () => {
        const response = await request(router).get("/");

        expect(response.type).toBe("application/json");
      });
    });
  });
  describe("router", () => {
    it("should insert provided hobbit", async () => {
      await games.post({ title: "pacman" });

      const games = await db("games");

      expect(games).toHaveLength(1);
    });

    it("should insert provided games", async () => {
      let games = await games.post({ title: "pacman" });
      expect(games.title).toBe("pacman");

      games = await games.post({ title: "pacman" });
      expect(games.title).toBe("pacman");

      const games = await db("games");

      expect(games).toHaveLength(2);
    });
  });
});
