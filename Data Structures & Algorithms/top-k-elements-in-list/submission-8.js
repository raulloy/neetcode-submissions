class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {}

        for(let val of nums){
            frequency[val] = (frequency[val] || 0) + 1
        }


        const result = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]).map(Number)

        return result.slice(0, k)
    }
}
