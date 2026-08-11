class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = [...s];
        let tArr = [...t];

        let frequency1 = {}
        let frequency2 = {}

        if (sArr.length !== tArr.length) return false;

        for(let val of sArr){
            frequency1[val] ? frequency1[val] = frequency1[val] + 1 : frequency1[val] = 1
        }

        for(let val of tArr){
            frequency2[val] ? frequency2[val] = frequency2[val] + 1 : frequency2[val] = 1
        }

        for(let key in frequency1){
            if (!(key in frequency2)) return false
            if (frequency1[key] !== frequency2[key]) return false
        }

        return true
    }
}
