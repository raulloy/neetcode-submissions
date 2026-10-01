class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        let frequency = {};

        for (let val of nums) {
            frequency[val] = (frequency[val] || 0) + 1;
        }

        const arr = Object.keys(frequency).map(Number).sort((a, b) => a - b);

        let currentLength = 1;
        let maxLength = 1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] === arr[i] + 1) {
                currentLength++
            } else {
                maxLength = Math.max(maxLength, currentLength);
                currentLength = 1;
            }
        }

        return Math.max(maxLength, currentLength);
    }
}
