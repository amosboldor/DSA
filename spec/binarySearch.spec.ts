 import binarySearch from "../src/binarySearch";

 describe("binarySearch returns index of given (num) from given array", function(){
    const sortedArr = [8, 9, 9, 18, 21, 25, 27, 33, 34, 38, 40, 48, 55, 57, 63, 69, 73, 78, 85, 99];
    it("binarySearch returns -1 when (num) not in array", function(){
        expect(binarySearch(sortedArr, 4)).toEqual(-1);
    });
    it("binarySearch returns 0", function(){
        expect(binarySearch(sortedArr, 8)).toEqual(0);
    });
    it("binarySearch returns 5", function(){
        expect(binarySearch(sortedArr, 25)).toEqual(5);
    });
    it("binarySearch returns 9", function(){
        expect(binarySearch(sortedArr, 38)).toEqual(9)
    });
    it("binarySearch returns 19", function(){
        expect(binarySearch(sortedArr, 99)).toEqual(19)
    });
 });