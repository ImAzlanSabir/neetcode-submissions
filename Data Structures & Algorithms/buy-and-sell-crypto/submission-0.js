class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let b = 0;
        let profit = 0;

        for (let s = 1; s < prices.length; s++) {
            if (prices[s] < prices[b]) {
                b = s;
            } else {
                profit = Math.max(profit, prices[s] - prices[b]);
            }
        }

        return profit;
    }
}
