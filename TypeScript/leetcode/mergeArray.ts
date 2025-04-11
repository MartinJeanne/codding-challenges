function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }
    console.log(nums1.sort((a, b) => a - b));
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
