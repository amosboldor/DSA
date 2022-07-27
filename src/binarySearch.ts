export default function binarySearch(arr: number[], num: number): number {
    // find and return index of given (num) from given (arr)
    let first = 0;
    let last = arr.length;
    while (first <= last) {
        const middle = Math.floor((last + first) / 2);
        const middleVal = arr[middle]!;
        if (middleVal === num) {
            return middle;
        } else if (middleVal < num) {
            first = middle + 1;
        } else  {
            last = middle - 1;
        }
    }
    return -1;
}