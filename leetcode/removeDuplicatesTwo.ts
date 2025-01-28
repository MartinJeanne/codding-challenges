function removeDuplicatesTwo(nums: number[]): number {
    let k = 0;
    const oneOrTwo: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const index = oneOrTwo.indexOf(nums[i]);
        if (index !== -1 && oneOrTwo.indexOf(nums[i], index + 1) !== -1) continue;
        nums[k] = nums[i];
        k++;
        oneOrTwo.push(nums[i]);

    }
    return k;
}

//console.log(removeDuplicatesTwo([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// uses two pointers
function removeDuplicatesSoluce(nums: number[]): number {
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[k - 2] !== nums[i]) {
            nums[k] = nums[i];
            k++;
        }        
    }
    return k;
}

console.log(removeDuplicatesSoluce([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));