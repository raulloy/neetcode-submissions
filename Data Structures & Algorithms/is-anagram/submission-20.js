class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const s_arr = [...s];
        const t_arr = [...t];

        const s_sorted = s_arr.sort().join('');
        const t_sorted = t_arr.sort().join('');

        console.log(s_sorted);
        console.log(t_sorted);

        for (let i = 0; i < s_arr.length; i++) {
            if (s_sorted[i] !== t_sorted[i]) return false;
        }

        return true;
    }
}
