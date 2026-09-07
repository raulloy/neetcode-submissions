class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {        


  const originalNums = [...nums];

  let start = 0;
  let end = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (start < end) {
    const sum = nums[start] + nums[end];

    if (sum === target) {
      return [originalNums.indexOf(nums[start]), originalNums.lastIndexOf(nums[end])];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
    }
}
