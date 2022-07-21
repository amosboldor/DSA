import same from "../src/sameSquaredValues";

describe("Tests for sameSquaredValues same()", function(){
    it("same returns true given same values/frequency", function(){
        expect(same([1, 2, 3], [4, 1, 9])).toBeTrue();
    });
    it("same returns false given not all values", function(){
        expect(same([1, 2, 3], [1, 9])).toBeFalse();
    });
    it("same returns false given some different frequency of values", function(){
        expect(same([1, 2, 1], [4, 4, 1])).toBeFalse();
    });
    it("same returns true if balance in the force", function(){
        expect(same([1, 23, 2, 1, 6], [36, 1, 4, 529, 1])).toBeTrue();
    });
});