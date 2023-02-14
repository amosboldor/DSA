export default function charCount(str: string): Map<string, number> {
    // return a tally of every character in the given string
    let tally = new Map<string, number>();
    for (let i of str) {
        let chars: number | undefined = tally.get(i);
        if (chars) {
            tally.set(i, chars + 1);
        } else {
            tally.set(i, 1);
        }
    }
    return tally;
}