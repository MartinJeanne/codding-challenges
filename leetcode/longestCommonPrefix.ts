function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];
    const map = new Map();
    let prefix;
    for (let x = 0; x < strs.length; x++) {
        if (!strs[x] || strs[x].length < 2) continue;
        prefix = strs[x][0] + strs[x][1];
        const el = map.get(prefix);
        if (el) map.set(prefix, el + 1);
        else map.set(prefix, 1);
    }

    let biggestPrefix = '';
    let biggestValue = 0;
    map.forEach((value, key) => {
        if (value > biggestValue) {
            biggestPrefix = key;
            biggestValue = value;
        }
    })
    if (biggestValue === 1) return '';
    return biggestPrefix;
};



function longestCommonPrefix2(strs: string[]): string {
    const map = new Map<string, number>();
    let prefix;
    for (let x = 0; x < strs.length; x++) {
        let hasMatchingPrefix = false;
        for (let y = 1; y < strs[x].length; y++) {
            prefix = strs[x].substring(0, y);
            const el = map.get(prefix);
            if (el) {
                map.set(prefix, el + 1);
                hasMatchingPrefix = true;
            }
            else map.set(prefix, 1);
            if (y === strs[x].length && !hasMatchingPrefix) return 'NO';
        }
    }
    console.log(map);


    let biggestKey = '';
    let biggestValue = 0;
    map.forEach((value, key) => {
        if (value > biggestValue || (value === biggestValue && key.length > biggestKey.length)) {
            biggestKey = key;
            biggestValue = value;
        }
    })
    return biggestKey;
}




function longestCommonPrefix3(strs: string[]): string {
    const map = new Map<string, number>();
    for (let x = 1; x <= strs[0].length; x++) {
        map.set(strs[0].substring(0, x), 1);
    }

    let currentPrefix;
    let hasMatch;
    for (let x = 1; x < strs.length; x++) {
        hasMatch = false;
        for (let y = 1; y <= strs[x].length; y++) {
            currentPrefix = strs[x].substring(0, y);
            const value = map.get(currentPrefix);
            if (value) {
                map.set(currentPrefix, value + 1);
                hasMatch = true;
            } else break;
        }
        if (!hasMatch) return '';
    }

    let biggestKey = '';
    let biggestValue = 0;
    map.forEach((value, key) => {
        if (value > biggestValue || (value === biggestValue && key.length > biggestKey.length)) {
            biggestKey = key;
            biggestValue = value;
        }
    })
    return biggestKey;
}



function longestCommonPrefix4(strs: string[]): string {
    let prefix = strs[0];
    for (let x = 1; x < strs.length; x++) {
        while (!strs[x].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}



// Vertical scanning
function longestCommonPrefix5(strs: string[]): string {
    if (strs == null || strs.length == 0) return "";
    for (let i = 0; i < strs[0].length; i++) {
        let c = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i == strs[j].length || strs[j].charAt(i) != c)
                return strs[0].substring(0, i);
        }
    }
    return strs[0];
}

//console.log(longestCommonPrefix5(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix5(["reflower", "flow", "flight"]));
console.log(longestCommonPrefix5(["c", "acc", "ccc"]));
