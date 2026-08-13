class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const originalNums = [...nums];
        let left = 0
        let right = nums.length - 1

        const sortedNums = nums.sort((a, b) => a - b);

        while(left < right){
            let sum = sortedNums[left] + sortedNums[right];

            if (sum === target){
                const firstValue = sortedNums[left];
                const secondValue = sortedNums[right];
                const firstOutput = originalNums.indexOf(firstValue);
                const secondOutput = originalNums.lastIndexOf(secondValue);
                return [secondOutput < firstOutput ? secondOutput : firstOutput, firstOutput > secondOutput ? firstOutput : secondOutput];
            } else if (sum > target){
                right--
            } else{
                left++
            }
        }

        return [left, right]
    }
}