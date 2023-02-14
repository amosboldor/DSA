import validAnagram from "../src/other/anagrams";

describe("validAnagram returns true if both strings given are anagrams of each other", function(){
    it("validAnagram(\"aaz\", \"zza\") = false", function(){
        expect(validAnagram("aaz", "zza")).toBeFalse();
    });
    it("validAnagram(\"anagram\", \"nagaram\") = true", function(){
        expect(validAnagram("anagram", "nagaram")).toBeTrue();
    });
    it("validAnagram(\"rat\", \"car\") = false", function(){
        expect(validAnagram("rat", "car")).toBeFalse();
    });
    it("validAnagram(\"awesome\", \"awesom\") = false", function(){
        expect(validAnagram("awesome", "awesom")).toBeFalse();
    });
    it("validAnagram(\"qwerty\", \"qeywrt\") = true", function(){
        expect(validAnagram("qwerty", "qeywrt")).toBeTrue();
    });
    it("validAnagram(\"supercalifragilisticexpialidocious\", \"extracellularpacificsoupgodsisiiii\") = true", function(){
        expect(validAnagram("supercalifragilisticexpialidocious", "extracellularpacificsoupgodsisiiii")).toBeTrue();
    });
    it("validAnagram returns true with mixed case strings given", function(){
        expect(validAnagram("biGgysmAlLs", "mallBiggySs")).toBeTrue();
    });
    it("validAnagram returns false if given an empty string", function(){
        expect(validAnagram("", "")).toBeFalse();
    });
});