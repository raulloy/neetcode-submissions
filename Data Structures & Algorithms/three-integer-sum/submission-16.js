class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        console.log(nums);

        const result = [];

        for (let i = 0; i < nums.length - 1; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;
            console.log(i);

            while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            console.log('  ', i, nums[i], nums[left], nums[right], 'sum', sum);

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
            }
        }

        return result;
    }
}
