function findStartingAndEndingIndexOfPrimaryDiagonal(arr: number[][]): [number, number] | null {
    let biggestLength = 0;
    let BGIndexes: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > biggestLength) {
            BGIndexes = [i];
            biggestLength = arr[i].length;
        }
        else if (arr[i].length === biggestLength) {
            BGIndexes.push(i);
        }
    }
    if (BGIndexes.length < 1) return null;
    return [BGIndexes[0], BGIndexes[BGIndexes.length - 1]];
}

function diagonalDifference(arr: number[][]): number {
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    let startEndIndexes = findStartingAndEndingIndexOfPrimaryDiagonal(arr);
    if (!startEndIndexes) throw new Error('Starting index not found');

    let y = 0;
    for (let i = startEndIndexes[0]; i < arr.length; i++) {
        sumFirstDiagonal += arr[i][y];
        y++;
    }

    y = 0;
    for (let i = startEndIndexes[1]; i >= startEndIndexes[0]; i--) {
        sumSecondDiagonal += arr[i][y];
        y++;
    }

    return Math.abs(sumFirstDiagonal - sumSecondDiagonal);
}

const arg: number[][] = [
    [3],
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

const res = diagonalDifference(arg);
console.log(`Result: ${res}`);

