class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums = nums.sort((a, b) => a - b);

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) return true;
        }

        return false;

        // let frequency = {};

        // for (let val of nums) {
        //     frequency[val] = (frequency[val] || 0) + 1;
        // }

        // console.log(frequency);

        // for (let key in frequency) {
        //     if (frequency[key] > 1) return true;
        // }

        // return false;
    }
}
