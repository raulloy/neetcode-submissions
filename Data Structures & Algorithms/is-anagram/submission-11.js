class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let frequency_s = {};
        let frequency_t = {};

        const s_arr = s.split('').sort();
        const t_arr = t.split('').sort();

        if (s_arr.length !== t_arr.length) return false;

        for (let val of s_arr) {
            frequency_s[val] = (frequency_s[val] || 0) + 1;
        }

        for (let val of t_arr) {
            frequency_t[val] = (frequency_t[val] || 0) + 1;
        }

        for (let key in frequency_s) {
            if (frequency_s[key] !== frequency_t[key]) return false;
        }

        return true;
    }
}
