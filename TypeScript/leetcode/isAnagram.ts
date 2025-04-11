function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const sMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        const nbOfLetter = sMap.get(letter);
        if (nbOfLetter) sMap.set(letter, nbOfLetter + 1);
        else sMap.set(letter, 1);
    }

    for (let i = 0; i < s.length; i++) {
        const letter = t[i];
        const nbOfLetter = sMap.get(letter);
        if (!nbOfLetter) return false;
        else {
            if (nbOfLetter <= 0) return false;
            else sMap.set(letter, nbOfLetter - 1);
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
