class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {        
        const original = [...nums];
        nums.sort((a, b) => a - b);

        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                const i = original.indexOf(nums[left]);
                const j = original.lastIndexOf(nums[right]);

                return [i, j];
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
}
