import { defaultServer } from "@/server";
import request from "supertest"

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => { });
  jest.spyOn(console, 'log').mockImplementation(() => { });
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('http server tests', () => {

  test("test unauthorized", async () => {
    const response = await request(defaultServer)
      .get('/')
    expect(response.statusCode).toBe(401);
  })

  test("test unprocessable entity", async () => {
    const response = await request(defaultServer)
      .post('/')
      .send("1337\'")
      .set('Authorization', '3a')
    expect(response.statusCode).toBe(422);
  });

  test("test default server", async () => {
    const response = await request(defaultServer)
      .post('/')
      .send({ name: "username" })
      .set('Authorization', '3a')
    expect(response.statusCode).toBe(200);
  });

});
