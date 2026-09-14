class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = new Array(nums.length).fill(1)
        const right = new Array(nums.length).fill(1)
        const result = new Array(nums.length)

        let product = 1

        for(let i = 0; i < nums.length; i++){
            left[i] = product
            product *= nums[i]
        }

        product = 1

        for(let i = nums.length - 1; i >= 0; i--){
            right[i] = product
            product *= nums[i]
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = left[i] * right[i];
        }

        return result
    }
}
