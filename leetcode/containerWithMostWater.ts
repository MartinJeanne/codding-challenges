// Ok, but runtime complexity to big O(n^2)
function maxArea(height: number[]): number {
    let maxArea = 0;
    let currentArea = 0;
    for (let x = 0; x < height.length; x++) {
        for (let y = height.length - 1; y > x; y--) {
            const shortest = height[x] > height[y] ? height[y] : height[x];
            currentArea = shortest * (y - x);
            if (currentArea > maxArea) maxArea = currentArea;
        }
    }
    return maxArea;
};


function maxArea2(height: number[]): number {
    let maxArea = 0;
    let currentArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const shortest = Math.min(height[left], height[right]);
        currentArea = shortest * (right - left);
        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 1]));
console.log(maxArea([8, 7, 2, 1]));