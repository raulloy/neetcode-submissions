class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = {};

        for (let val of nums) {
            frequency[val]  = (frequency[val] || 0) + 1
        }

        return Object.keys(frequency)
            .sort((a, b) => frequency[b] - frequency[a])
            .map(Number)
            .slice(0, k);
    }
}
