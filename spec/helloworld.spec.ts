import { hello } from "../src/helloworld"

it("hello function returns world", function() {
  expect(hello()).toBe("world");
});
