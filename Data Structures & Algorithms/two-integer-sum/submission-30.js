class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {        
        const originalNums = [...nums];

        nums.sort((a, b) => a - b);

        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target) {
                const i = originalNums.indexOf(nums[left]);
                const j = originalNums.lastIndexOf(nums[right]);

                return [i, j];
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
}
