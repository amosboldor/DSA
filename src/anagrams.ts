export default function validAnagram(str1: string, str2:string): boolean {
    if (str1.length === str2.length) {
        const tally1 = new Map<string, number>();
        const tally2 = new Map<string, number>();
        for (let i = 0; i < str1.length; i++) {
            const charKey1 = str1.charAt(i);
            const charKey2 = str2.charAt(i);
            const chars1: number | undefined = tally1.get(charKey1);
            const chars2: number | undefined = tally2.get(charKey2);
            if (chars1) {
                tally1.set(charKey1, chars1 + 1);
            } else {
                tally1.set(charKey1, 1);
            }
            if (chars2) {
                tally2.set(charKey2, chars2 + 1);
            } else {
                tally2.set(charKey2, 1);
            }
        }
        for (let [key, value] of tally1) {
            const tally2feq = tally2.get(key);
            if (!tally2feq || tally2feq !== value) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}