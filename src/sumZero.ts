export default function sumZero(integers: number[]): number[] | undefined {
    // accepts a sorted array of integers
    // the function should find the first pair where the sum is 0
    // return an array that includes both values that sum to zero
    // or undefined if a pair does not exist
    let leftPointer = 0;
    let rightPointer = integers.length - 1;
    while (leftPointer < rightPointer) {
        const leftInt = integers[leftPointer]!;
        const rightInt = integers[rightPointer]!;
        const leftRightSum = leftInt + rightInt;
        if (leftRightSum === 0) {
            return [leftInt, rightInt];
        } else if (leftRightSum > 0) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
    return undefined;
}