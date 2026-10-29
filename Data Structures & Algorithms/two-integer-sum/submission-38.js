class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {        
        const arr = [...nums].sort((a, b) => a - b);

        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const sum = arr[left] + arr[right];

            if (sum === target) {
            const i = nums.indexOf(arr[left]);
            const j = nums.lastIndexOf(arr[right]);

            return [i, j];
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
}
