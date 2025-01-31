function isPalindrome(s: string): boolean {
    let str = s.trim().toLowerCase().replace(/[^0-9a-z]/gi, '');
    for (let x = 0, y = str.length - 1; x < str.length, y > 0; x++, y--) {
        if (str[x] !== str[y]) return false;
    }
    return true;
};

console.log(isPalindrome('ab_a'));
