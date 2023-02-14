import sameFrequency from "../src/other/sameFrequency";

describe("sameFrequency returns the two numbers have the same frequency of digits", function(){
    it("sameFrequency(112, 211) returns true", function(){
        expect(sameFrequency(112, 211)).toBeTrue();
    });
    it("sameFrequency(109344, 410439) returns true", function(){
        expect(sameFrequency(109344, 410439)).toBeTrue();
    });
    it("sameFrequency(109344, 41043) returns false", function(){
        expect(sameFrequency(109344, 41043)).toBeFalse();
    });
    it("sameFrequency(112, 122) returns false", function(){
        expect(sameFrequency(112, 122)).toBeFalse();
    });
});