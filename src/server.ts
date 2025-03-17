import { createServer } from "http";

export const defaultServer = createServer((request, response) => {

  response.setHeader("Content-Type", "application/json")

  if (request.headers["authorization"] !== "3a") {
    response.statusCode = 401
    return response.end(JSON.stringify({
      message: "Unauthorized"
    }));
  }

  let body = "";

  request.on("data", (chunk) => {
    body += chunk.toString()
  });

  request.on("end", () => {
    try {
      JSON.parse(body);
      response.statusCode = 200
      response.end(body)
    }
    catch (e) {
      console.error(e)
      response.statusCode = 422
      response.end(JSON.stringify({
        message: "Unprocessable content"
      }))
    }
  });

});
