const request = require("supertest");
const app = require("../app");
require("dotenv").config();

const mongoose = require("mongoose");

describe("Test logInUser controller", () => {
  beforeAll(async () => mongoose.connect(process.env.DB_HOST));

  afterAll(async () => mongoose.disconnect());

  it("Should login user.", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "example@example.com",
      password: "examplepassword",
    });
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      token: expect.any(String),
      user: {
        email: "example@example.com",
        subscription: expect.any(String),
      },
    });
  });
});
