function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let x = i + 1; x < nums.length; x++) {
            if (nums[i] + nums[x] === target) return [i, x];
        }
    }
}