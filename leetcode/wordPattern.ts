function wordPattern(pattern: string, s: string): boolean {
    const sArr = s.split(' ');
    if (pattern.length !== sArr.length) return false;
    const patternWord = new Map<string, string>();
    const wordPattern = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
        const word = patternWord.get(pattern[i]);
        const patt = wordPattern.get(sArr[i]);
        if (word) {
            if (word !== sArr[i]) return false;
        }
        else if (patt) {
            if (patt !== pattern[i]) return false;
        }
        else {
            patternWord.set(pattern[i], sArr[i]);
            wordPattern.set(sArr[i], pattern[i]);
        }
    }
    return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));