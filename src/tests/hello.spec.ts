import { hello } from "@/hello";

describe("App", () => {
  it("should be green", async () => {
    expect(hello("Kraaakilo")).toBe("Hello Kraaakilo!");
  });
});
