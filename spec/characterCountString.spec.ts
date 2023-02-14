import charCount from "../src/other/characterCountString";

describe("charCount returns a Map of tally of each character in the string given", function() {
    it("charCount returns a Map", function(){
        expect(charCount("zzzzz")).toBeInstanceOf(Map);
    });
    it("charCount returns Map(1) { 'z' => 5 }", function(){
        expect(charCount("zzzzz").get("z")).toBe(5);
    });
    it("charCount returns empty Map when given empty string", function(){
        expect(charCount("").size).toBe(0);
    });
    it("charCount returns correct tally more complex string", function(){
        const tally = charCount("monomorphemic");
        expect(tally.get("m")).toBe(3);
        expect(tally.get("o")).toBe(3);
        expect(tally.get("n")).toBe(1);
        expect(tally.get("r")).toBe(1);
        expect(tally.get("p")).toBe(1);
        expect(tally.get("h")).toBe(1);
        expect(tally.get("e")).toBe(1);
        expect(tally.get("i")).toBe(1);
        expect(tally.get("c")).toBe(1);
    });
    it("charCount returns correct tally for Uppercase & Lowercase", function(){
        const tally = charCount("aAaAAAAOOooOOOaO");
        expect(tally.get("a")).toBe(3);
        expect(tally.get("A")).toBe(5);
        expect(tally.get("O")).toBe(6);
        expect(tally.get("o")).toBe(2);
    });
    it("charCount returns correct tally for symbols", function(){
        const tally = charCount("@@#@  §*)§");
        expect(tally.get("@")).toBe(3);
        expect(tally.get("#")).toBe(1);
        expect(tally.get(" ")).toBe(2);
        expect(tally.get("*")).toBe(1);
        expect(tally.get(")")).toBe(1);
        expect(tally.get("§")).toBe(2);
    });
});