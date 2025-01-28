// uses two pointers
function removeDuplicates(nums: number[]): number {
    let k = 0;
    const uniques: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (!uniques.includes(nums[i])) {
            nums[k] = nums[i];
            k++;
            uniques.push(nums[i]);
        }
    }
    return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
