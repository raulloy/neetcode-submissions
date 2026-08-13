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

        for(let key in frequency2){
            if (!(key in frequency1)) return false
            if (frequency2[key] !== frequency1[key]) return false
        }

        return true
    }
}
