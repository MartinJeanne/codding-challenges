/*
function maxProfitII(prices: number[]): number {
    let buyIndex = 0;
    const profits = [];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[buyIndex])
            prices[buyIndex] = prices[i];
        if ((prices[i] - prices[buyIndex]) > 0)
            profits.push([prices[i], prices[buyIndex], prices[i] - prices[buyIndex]]);
    }

    let maxProfit = 0;
    for (let i = 0; i < profits.length; i++) {
        if (profits[i][2] > maxProfit)
            maxProfit = profits[i][2];
        
    }
    return maxProfit;
}

console.log(maxProfitII([7, 1, 5, 3, 6, 4]));
console.log(maxProfitII([1, 2, 3, 4, 5]));
console.log(maxProfitII([7, 6, 4, 3, 1]));
*/

// Watched a solution
function maxProfit(prices: number[]): number {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
