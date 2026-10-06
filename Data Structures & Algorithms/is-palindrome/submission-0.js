class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean_s = s.replace(/\W/g, '').toLowerCase();

        let left = 0;
        let right = clean_s.length - 1;

        while (left !== clean_s.length) {
            if (clean_s[left] === clean_s[right]) {
            left++;
            right--;
            } else {
            return false;
            }
        }

        return true;
    }
}
