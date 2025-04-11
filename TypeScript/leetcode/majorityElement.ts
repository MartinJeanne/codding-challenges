function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let majorityNb: number[] = [nums[0]];
    let currentNb: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (currentNb[0] === nums[i]) {
            currentNb.push(nums[i]);
            if (currentNb.length > majorityNb.length) {
                majorityNb = currentNb;
            }
        }
        else {
            currentNb = [nums[i]];
        }
    }
    return majorityNb[0];
};


//console.log(majorityElement([1]));

// Hash map
function majorityElementSoluce(nums: number[]): number {
    const map = new Map();
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let nb = map.get(nums[i]);
        if (nb) map.set(nums[i], nb + 1);
        else map.set(nums[i], 1);
    }    

    let majorityNum = 0;
    n = n / 2;
    map.forEach((value, key) => {
        if (value > n) return majorityNum = key;
    })
    return majorityNum;
};

console.log(majorityElementSoluce([2, 2, 1, 1, 1, 2, 2]));
