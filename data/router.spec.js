const request = require("supertest");

const server = require("../server");

describe("games-router", () => {
  it("returns 200 ok", () => {
    return request(server)
      .get("/api/games")
      .expect(200);
  });
  it("should return JSON", async () => {
    const res = await request(server).get("/api/games");
    expect(res.type).toBe("application/json");
  });
});

describe("POST /api/games", () => {
  let data = {
    id: "6",
    title: "steven",
    genre: "1234567",
    releaseYear: 1
  };
  it("respond with 201 created", async () => {
    await request(server)
      .post("/api/games")
      .send(data)
      .set("Accept", "application/json")
      expect(201);
  });
});
      

describe("POST /api/games", () => {
  let data = {
    title: "samm",
    genre: "1234567",
    releaseYear: 1
  };
  it("respond with 500 not created", () => {
    request(server)
      .post("/api/games")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(500);
  });
});
it("validate that the required fields are included inside the body", () => {
  request(server)
    .post("/api/games")
    .send({ title: "" })
    .set("Content-Type", "application/json")
    .expect(422);
});
