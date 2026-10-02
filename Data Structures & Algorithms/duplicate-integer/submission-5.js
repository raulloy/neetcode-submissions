class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
  let freq = {};

  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) return true;
  }

  return false;
    }
}
