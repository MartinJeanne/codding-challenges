function canConstruct(ransomNote: string, magazine: string): boolean {
    if (magazine.length < ransomNote.length) return false;

    const magLetters: Map<string, number> = new Map();
    for (let x = 0; x < magazine.length; x++) {
        const letterNb = magLetters.get(magazine[x]);
        if (letterNb) magLetters.set(magazine[x], letterNb + 1);
        else magLetters.set(magazine[x], 1);
    }

    for (let x = 0; x < ransomNote.length; x++) {
        const letterNb = magLetters.get(ransomNote[x]);
        if (!letterNb || letterNb === 0) return false;
        magLetters.set(ransomNote[x], letterNb - 1);
    }
    return true;
};

console.log(canConstruct('aa', 'ab'));
