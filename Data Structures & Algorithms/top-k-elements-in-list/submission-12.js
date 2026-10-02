class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  let frequency = {};

  for (let n of nums) {
    frequency[n] = (frequency[n] || 0) + 1;
  }

  const output = Object.keys(frequency)
    .sort((a, b) => frequency[b] - frequency[a])
    .map(Number);

  return output.slice(0, k);
    }
}
