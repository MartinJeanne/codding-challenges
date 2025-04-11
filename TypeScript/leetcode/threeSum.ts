// three pointers
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const threeSum: number[][] = [];
    let i = 0;
    let j = 1;
    let k = nums.length - 1;

    while (i < nums.length - 1) {
        let total = nums[i] + nums[j] + nums[k];
        if (total === 0) {
            threeSum.push([nums[i], nums[j], nums[k]]);
            j++;
            while (nums[j] === nums[j - 1]) {
                j++;
            }
        }
        else if (total > 0) k--;
        else if (total < 0) j++;

        if (j >= k) {
            i++;
            j = i + 1;
            k = nums.length - 1;
        }
        while (nums[i] === nums[i - 1]) {
            i++;
            j++;
            if (j >= k) return threeSum;
        }
    }

    return threeSum;
};



// console.log(threeSum([-1, 0, 1, 2, -1, -4]));[-4, -1, -1, -1, -1, 0, 1, 2]
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));