// Doesn't modify in-place, doesn't work if k bigger than nums.lenght
function rotate(nums: number[], k: number): void {
    k++;
    const rotatedNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (i + k > nums.length - 1) {
            rotatedNums.push((i + k) - (nums.length - 1));
        }
        else rotatedNums.push(nums[i + k]);
    }
    nums = rotatedNums;
};

//rotate([1, 2, 3, 4, 5, 6, 7], 3);

// Seems better, but the temporal complexity is O(n^2)
// After trying to submit to leetcode, it's indeed to complex (one test with big inputs doesn't pass)
function rotate2(nums: number[], k: number): void {
    const lastIndex = nums.length - 1;
    for (let x = 0; x < k; x++) {
        let buffer = nums[lastIndex];
        for (let i = lastIndex - 1; i >= 0; i--) {
            nums[i + 1] = nums[i];
            if (i === 0) nums[i] = buffer;
        }
    }
    console.log(nums);
};

//rotate2([-1, -100, 3, 99], 2);
//rotate2([1, 2, 3, 4, 5, 6, 7], 8);

// Seems even better, with a time complexity of O(n)
function rotate3(nums: number[], k: number): void {
    const numsCp = [...nums];
    let position;
    for (let i = 0; i < nums.length; i++) {
        position = i + k;
        if (position >= nums.length) position = position % nums.length;
        nums[position] = numsCp[i];
    }
};

rotate3([1, 2, 3, 4, 5, 6, 7], 8);
//rotate3([-1, -100, 3, 99], 2);
