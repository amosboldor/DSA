 import sumZero from "../src/other/sumZero";

 describe("Testing subZero", function(){
    it("subZero returns undefined given [1,2,3]", function(){
        expect(sumZero([1,2,3])).toBeUndefined();
    });
    it("subZero returns undefined given []", function(){
        expect(sumZero([])).toBeUndefined();
    });
    it("subZero returns undefined given [3]", function(){
        expect(sumZero([3])).toBeUndefined();
    });
    it("subZero returns [-3,3] given [-3,-1,0,1,3]", function(){
        expect(sumZero([-3,-1,0,1,3])).toEqual([-3, 3]);
    });
    it("subZero returns [-1,1] given [-1,0,1,3,4,5]", function(){
        expect(sumZero([-1,0,1,3,4,5])).toEqual([-1, 1]);
    });
    it("subZero returns [-1,1] given [-5,-4,-3,-2,-1,0,1]", function(){
        expect(sumZero([-5,-4,-3,-2,-1,0,1])).toEqual([-1, 1]);
    });
 });