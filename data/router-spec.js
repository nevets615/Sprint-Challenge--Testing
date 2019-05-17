const request = require("supertest");

const routers = require("./router.js");

describe("guest-router.js", () => {
  describe("get()", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await request(routers).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object fron the index route", async () => {
      const expectedBody = { api: "running" };

      const response = await request(routers).get("/");

      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object fron the index route", async () => {
      const response = await request(routers).get("/");

      expect(response.type).toEqual("user");
    });
  });
});
describe("post()", () => {
  it("should insert provided hobbit", async () => {
    await guest.post({ name: "samm" });

    const guest = await db("guest");

    expect(guest).toHaveLength(1);
  });

  it("should insert provided user", async () => {
    let guest = await Guest.post({ name: "bobby" });
    expect(guest.name).toBe("bobby");

    guest = await Guest.post({ name: "bobby" });
    expect(guest.name).toBe("boddy");

    const guest = await db("guest");

    expect(guest).toHaveLength(2);
  });
});