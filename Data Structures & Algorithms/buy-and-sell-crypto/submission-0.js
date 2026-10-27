class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let frequency = {};

        for (let val of prices) {
            frequency[val] ? (frequency[val] = frequency[val] + 1) : (frequency[val] = 1);
        }

        console.log(frequency);

        const arr = Object.keys(frequency).map(Number);

        let max = 0;

        for (let i = 1; i < arr.length; i++) {
            if (prices.indexOf(arr[i]) > prices.indexOf(arr[0])) {
            max = Math.max(max, arr[i] - arr[0]);
            }
        }

        return max;
    }
}
