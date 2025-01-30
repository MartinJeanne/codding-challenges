function longestCommonPrefix5(strs: string[]): string {
    let prefix = strs[0];
    for (let x = 1; x < strs.length; x++) {
        while (!strs[x].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

console.log(longestCommonPrefix4(["flower", "flow", "flight"]));
console.log(longestCommonPrefix4(["reflower", "flow", "flight"]));
console.log(longestCommonPrefix4(["c", "acc", "ccc"]));
