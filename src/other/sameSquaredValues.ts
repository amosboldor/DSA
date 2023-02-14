type Sqrt = {[key: number]: { "inverse": number, feq: number}};
type Sqrd = {[key: number]: number};

export default function same(arrVal: number[], arrValSqrd: number[]): boolean {
    // returns true if every value in the array has it's corresponding
    // value squared in the second array (frequency of values must be the same)
    if(arrVal.length === arrValSqrd.length) {
        const sqrt: Sqrt = {};
        const sqrd: Sqrd = {};
        arrVal.forEach((num1, i) => {
            const num2 = arrValSqrd[i]!;

            const sqrtVal =  sqrt[num1];
            const sqrdVal =  sqrd[num2];

            if (sqrtVal) {
                sqrtVal.feq++;
                sqrt[num1] = sqrtVal;
            } else {
                sqrt[num1] = {"inverse": num1 ** 2, feq: 1};
            }
            if (sqrdVal) {
                sqrd[num2]++;
            } else {
                sqrd[num2] = 1;
            }
        });
        for (const prop in sqrt) {
            const sqrtVal = sqrt[prop];
            const sqrdVal = sqrd[sqrtVal!.inverse];
            if (!sqrdVal || sqrdVal !== sqrtVal!.feq) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}