import charCount from "../src/characterCountString";

describe("charCount returns a Map of tally of each character in the string given", function() {
    it("returns a Map", function(){
        expect(charCount("zzzzz")).toBeInstanceOf(Map);
    });
    it("returns Map(1) { 'z' => 5 }", function(){
        expect(charCount("zzzzz").get("z")).toBe(5);
    });
});