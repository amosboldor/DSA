export default function binarySearch(arr: number[], num: number): number {
    let first = 0;
    let last = arr.length;
    const getMiddleIdx = () => Math.floor((last - first) / 2) + first;
    let middle = getMiddleIdx();
    while (first < last) {
        const middleVal = arr[middle]!;
        if (middleVal === num) {
            return middle;
        } else if (middleVal < num) {
            first = middle;
            middle = getMiddleIdx();
        } else  {
            last = middle;
            middle = getMiddleIdx();
        }
    }
    return -1;
}