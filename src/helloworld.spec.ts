import "jasmine";
import { hello } from "./helloworld"
 
describe("Test Stuff", function() {
  it("hello function returns world", function() {
    expect(hello()).toBe("world");
  });
});