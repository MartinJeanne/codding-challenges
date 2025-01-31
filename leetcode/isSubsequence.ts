function isSubsequence(s: string, t: string): boolean {
    let y = 0;
    for (let x = 0; x < t.length; x++) {
        if (t[x] === s[y]) y++;
    }
    return y === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
