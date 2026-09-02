class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = {};

        for (let val of nums) {
            count[val] = (count[val] || 0) + 1;
        }

        for (let key in count) {
            if (count[key] > 1) return true;
        }

        return false;
    }
}
