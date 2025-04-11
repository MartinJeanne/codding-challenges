// Work if char can be moved, but not the case
function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let sMap: Map<string, number> = new Map();
    let tMap: Map<string, number> = new Map();
    for (let x = 0; x < s.length; x++) {
        const sLetterCount = sMap.get(s[x]);
        if (sLetterCount) sMap.set(s[x], sLetterCount + 1);
        else sMap.set(s[x], 1);

        const tLetterCount = tMap.get(t[x]);
        if (tLetterCount) tMap.set(t[x], tLetterCount + 1);
        else tMap.set(t[x], 1);
    }
    const sSorted = [...sMap].sort((a, b) => b[1] - a[1]);
    sMap = new Map(sSorted);
    const tSorted = [...tMap].sort((a, b) => b[1] - a[1]);
    tMap = new Map(tSorted);

    const tMapIter = tMap.values();
    for (let [key, value] of sMap) {
        if (value !== tMapIter.next().value) return false;
    }
    console.log(sMap);
    console.log(tMap);
    return true;
};



function isIsomorphic2(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const StoT: Map<string, string> = new Map();
    const TtoS: Map<string, string> = new Map();

    for (let i = 0; i < s.length; i++) {
        const linkWithS = StoT.get(s[i]);
        const linkWithT = TtoS.get(t[i]);
        if (linkWithS) {
            if (linkWithS !== t[i]) return false;
        }
        else if (linkWithT) {
            if (linkWithS !== s[i]) return false;
        }
        else {
            StoT.set(s[i], t[i]);
            TtoS.set(t[i], s[i]);
        }
    }
    return true;
}

console.log(isIsomorphic2('egg', 'add'));
console.log(isIsomorphic2('bbbaaaba', 'aaabbbba'));
console.log(isIsomorphic2('badc', 'baba'));
