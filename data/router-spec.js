const request = require("supertest");

const server = require("./server.js");

describe("server", () => {
  describe("GET /api/games", () => {
    it("should return an OK status code from the index route", async () => {
      it("should return 200 OK", () => {
        return request(server)
          .get("/api/games")
          .expect(200);
      });
      it("should return a JSON object fron the index route", async () => {
        const expectedBody = { games };

        const response = await request(server).get("/api/games");

        expect(response.body).toBe(expectedBody);
      });

      it("should return { games }", () => {
        return request(server)
          .get("/api/games")
          .then(res => {
            expect(res.body).toBe("games");
          });
      });

      it("should return a JSON object fron the index route", async () => {
        const response = await request(server).get("/api/games");

        expect(response.type).toBe("application/json");
      });
    });
  });
  describe("server", () => {
    it("should insert provided hobbit", async () => {
      await server.post({ title: "pacman" });

      const games = await db("games");

      expect(games).toHaveLength(1);
    });

    it("should insert provided games", async () => {
      let games = await server.post({ title: "pacman" });
      expect(games.title).toBe("pacman");

      game = await games.post({ title: "pacman" });
      expect(games.title).toBe("pacman");

      const game = await db("games");

      expect(games).toHaveLength(2);
    });
  });
});
