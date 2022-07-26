export default function countUniqueValues(integers: number[]): number {
    // accepts a sorted array of numbers
    // counts the unique values in the array
    // returns the number of unique values
    // (using multiple pointers pattern)
    if (!integers.length) { return 0 }
    let leftPointer = 0;
    for(let rightPointer = 1; rightPointer < integers.length; rightPointer++) {
        const leftV = integers[leftPointer]!;
        const rightV = integers[rightPointer]!;
        if (leftV !== rightV) {
            leftPointer++;
            integers[leftPointer] = rightV;

        }
    }
    return leftPointer + 1;
}