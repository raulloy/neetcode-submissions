class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let _s = [...s];
        let _t = [...t];

        if (_s.length !== _t.length) return false;


        let s_frequency = {};
        let t_frequency = {};

        for (let val of _s) {
            s_frequency[val] = (s_frequency[val] || 0) + 1;
        }

        for (let val of _t) {
            t_frequency[val] = (t_frequency[val] || 0) + 1;
        }

        for (let key in s_frequency) {
            if (!(key in t_frequency)) return false;
            if (s_frequency[key] !== t_frequency[key]) return false;
        }

        return true;
    }
}
