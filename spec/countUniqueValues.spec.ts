 import countUniqueValues from "../src/countUniqueValues";

 describe("countUniqueValues returns the number of unique values", function(){
    it("countUniqueValues returns 0 given []", function(){
        expect(countUniqueValues([])).toEqual(0);
    });
    it("countUniqueValues returns 3 given [1,2,3]", function(){
        expect(countUniqueValues([1,2,3])).toEqual(3);
    });
    it("countUniqueValues returns 3 given [1,2,2,3]", function(){
        expect(countUniqueValues([1,2,2,3])).toEqual(3);
    });
    it("countUniqueValues returns 2 given [1,1,1,-1]", function(){
        expect(countUniqueValues([1,1,1,-1])).toEqual(2);
    });
    it("countUniqueValues returns 1 given [10,10,10,10]", function(){
        expect(countUniqueValues([10,10,10,10])).toEqual(1);
    });
    it("countUniqueValues returns 8 given [-1,-1,2,3,4,4,4,5,5,6,6,6,7,8]", function(){
        expect(countUniqueValues([-1,-1,2,3,4,4,4,5,5,6,6,6,7,8])).toEqual(8);
    });
 });