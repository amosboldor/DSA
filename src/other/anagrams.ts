export default function validAnagram(str1: string, str2:string): boolean {
    // return true if str1 is an anagram of str2 (& vice versa) otherwiser return false
    if (str1 && str1.length === str2.length) {
        const tally: {[key: string]: number} = {};
        for (let i = 0; i < str1.length; i++) {
            const charKey1 = str1.charAt(i).toLowerCase();
            tally[charKey1] ? tally[charKey1] += 1 : tally[charKey1] = 1;
        }
        for (let i = 0; i < str2.length; i++) {
            const charKey2 = str2.charAt(i).toLowerCase();
            if (!tally[charKey2]) {
                return false;
            } else {
                tally[charKey2] -= 1;
            }
        }
    } else {
        return false;
    }
    return true;
}