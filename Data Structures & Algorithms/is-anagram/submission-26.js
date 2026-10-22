class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const s_sorted = [...s].sort().join('');
        const t_sorted = [...t].sort().join('');

        for (let i = 0; i < s.length; i++) {
            if (s_sorted[i] !== t_sorted[i]) return false;
        }

        return true;
    }
}
