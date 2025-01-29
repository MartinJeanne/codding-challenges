// Works, but to much runtime complexity: O(n^2)
function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let x = i; x < prices.length; x++) {
            if (prices[i] - prices[x] < maxProfit)
                maxProfit = prices[i] - prices[x];
        }
    }
    return Math.abs(maxProfit);
}


function maxProfit2(prices: number[]): number {
    let smallest = Infinity;
    let biggest = -Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < smallest) {
            smallest = prices[i];
            biggest = -Infinity;
        }
        else if (prices[i] > biggest) biggest = prices[i];
    }
    if (biggest === -Infinity) return 0;
    return biggest - smallest;
}

// Kadane's Algorithm (variation) solution
function maxProfit3(prices: number[]): number {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) buy = prices[i];
        if ((prices[i] - buy) > profit) profit = prices[i] - buy;
    }
    return profit;
}

console.log(maxProfit3([7, 1, 5, 3, 6, 4]));
console.log(maxProfit3([7, 6, 4, 3, 1]));
console.log(maxProfit3([2, 9, 1, 2]));

'1, 2, 2, 9'
'2, 0, 3, 1'