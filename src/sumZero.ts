export default function sumZero(integers: number[]): number[] | undefined {
    let leftPointer = 0;
    let rightPointer = integers.length - 1;
    while (leftPointer < rightPointer) {
        const leftInt = integers[leftPointer]!;
        const rightInt = integers[rightPointer]!;
        const leftRightSum = leftInt + rightInt;

        if (leftRightSum === 0) {
            return [leftInt, rightInt];
        } else if (leftRightSum > 0) {
            rightPointer -= 1;
        } else if (leftRightSum < 0) {
            leftPointer += 1;
        }
    }
    return undefined;
}