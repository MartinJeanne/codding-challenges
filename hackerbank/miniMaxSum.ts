function miniMaxSum(arr: number[]): void {
    let miniValue = Infinity;
    let maxValue = -Infinity;
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < miniValue) miniValue = arr[i];
        if (arr[i] > maxValue) maxValue = arr[i];
        totalSum += arr[i];
    }

    console.log(`${totalSum - maxValue} ${totalSum - miniValue}`);
}

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * (100 - 1 + 1)) + 1);

console.time('miniMaxSum');
miniMaxSum([1, 1, 1, 1, 1]); // Doit afficher "4 4"
miniMaxSum([1, 2, 3, 4, 5]); // Doit afficher "10 14"
miniMaxSum([-3, -2, -1, -4, -5]); // Doit afficher "-14 -10"
miniMaxSum([1000000000, 1000000000, 1000000000, 1000000000, 1000000000]); // Doit afficher "4000000000 4000000000"
console.timeEnd('miniMaxSum');
