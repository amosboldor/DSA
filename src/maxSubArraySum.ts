export default function maxSubArraySum(integers: number[], n: number): number | null {
    // accepts an array of integers and a number (n)
    // should calculate and return the maximum sum
    // of (n) consecutive elements in the array
    // otherwise return null
    if (integers.length < n) return null;
    let maxSum = 0;
    // sum the first n numbers
    for (let i = 0; i < n; i++) {
        maxSum += integers[i]!;
    }
    let tempSum = maxSum;
    // sum the next (n) numbers by adding the
    // next number and subtracting the previous from tempSum
    for (let i = n; i < integers.length; i++) {
        tempSum = tempSum + integers[i]! - integers[i - n]!;
        // update maxSum if tempSum is larger
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}