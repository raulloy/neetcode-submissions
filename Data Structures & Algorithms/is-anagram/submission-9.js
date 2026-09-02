class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_arr = [...s];
        const t_arr = [...t];

        if (s_arr.length !== t_arr.length) return false;

        let s_frequency = {};
        let t_frequency = {};

        for (let val of s_arr) {
            s_frequency[val] = (s_frequency[val] || 0) + 1;
        }

        for (let val of t_arr) {
            t_frequency[val] = (t_frequency[val] || 0) + 1;
        }

        for (let key in s_frequency) {
            if (!(key in t_frequency)) return false;
            if (s_frequency[key] !== t_frequency[key]) return false;
        }

        return true;
    }
}
