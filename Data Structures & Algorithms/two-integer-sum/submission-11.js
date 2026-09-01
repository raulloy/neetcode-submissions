class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sortedNums = nums
            .map((num, index) => [num, index])
            .sort((a, b) => a[0] - b[0]);

        let left = 0;
        let right = sortedNums.length - 1;

        while (left < right) {
            const sum = sortedNums[left][0] + sortedNums[right][0];

            if (sum === target) {
            const index1 = sortedNums[left][1];
            const index2 = sortedNums[right][1];

            return index1 < index2
                ? [index1, index2]
                : [index2, index1];
            }

            if (sum > target) {
            right--;
            } else {
            left++;
            }
        }
    }
}