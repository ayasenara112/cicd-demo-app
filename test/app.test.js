const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return CI/CD message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Hello from CI/CD Pipeline");
  });
});