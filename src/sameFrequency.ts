export default function sameFrequency(num1: number, num2: number): boolean {
    // Given two positive intergers, find out if
    // the two numbers have the same frequency of digits.
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;
    const tally1 = new Map<string, number>();
    const tally2 = new Map<string, number>();
    for (let i = 0; i < strNum1.length; i++) {
        const digit1 = strNum1[i]!;
        const digits1: number | undefined = tally1.get(digit1);
        if (digits1) {
            tally1.set(digit1, digits1 + 1);
        } else {
            tally1.set(digit1, 1);
        }
        const digit2 = strNum2[i]!;
        const digits2: number | undefined = tally2.get(digit2);
        if (digits2) {
            tally2.set(digit2, digits2 + 1);
        } else {
            tally2.set(digit2, 1);
        }
    }
    for (const [key, count1] of tally1) {
        const count2 = tally2.get(key);
        if (count1 !== count2) {
            return false;
        }
    }
    return true;
}
