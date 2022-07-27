import maxSubArraySum from "../src/maxSubArraySum";

describe("maxSubArraySum calculates the maximum sum of (n) consecutive elements in array", function(){
    it("maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) returns 10", function(){
        expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
    });
    it("maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) returns 17", function(){
        expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17);
    });
    it("maxSubArraySum([4, 2, 1, 6], 1) returns 6", function(){
        expect(maxSubArraySum([4, 2, 1, 6], 1)).toEqual(6);
    });
    it("maxSubArraySum([4, 2, 1, 6, 2], 4) returns 13", function(){
        expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toEqual(13);
    });
    it("maxSubArraySum([], 4) returns null", function(){
        expect(maxSubArraySum([], 4)).toBeNull();
    });
});