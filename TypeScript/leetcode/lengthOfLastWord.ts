function lengthOfLastWord(s: string): number {
    const sArr = s.trim().split(' ');
    return sArr[sArr.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));