class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {        
        const original_nums = [...nums];
        target < 0 ? nums.sort((a, b) => b - a) : nums.sort((a, b) => a - b);

        console.log(original_nums);
        console.log(nums);

        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            console.log(left, right);
            const sum = nums[left] + nums[right];

            if (target >= 0) {
                if (sum === target) {
                    return [
                        original_nums.indexOf(nums[left]),
                        original_nums.lastIndexOf(nums[right])
                    ];
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            } else {
                if (sum === target) {
                    return [
                        original_nums.indexOf(nums[left]),
                        original_nums.lastIndexOf(nums[right])
                    ];
                } else if (sum > target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
}
