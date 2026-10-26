class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

        for (let val of strs) {
            let string = [...val].sort().join('');

            if (!groups[string]) groups[string] = [];

            groups[string].push(val);
        }

        return Object.values(groups);
    }
}