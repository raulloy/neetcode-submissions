class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphanum_s = s.replace(/\W/g, '').toLowerCase();

        console.log(alphanum_s);

        let l = 0;
        let r = alphanum_s.length - 1;

        while (l < alphanum_s.length) {
            if (alphanum_s[l] !== alphanum_s[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
