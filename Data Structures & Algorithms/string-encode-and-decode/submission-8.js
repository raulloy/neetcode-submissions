class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        strs.map((str, i) => {
            encoded += str.length + '#' + str;
        });


          return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
            j++;
            }

            const length = str.slice(i, j) * 1;
            const wordStart = j + 1;
            const wordEnd = wordStart + length;

            result.push(str.slice(wordStart, wordEnd));

            i = wordEnd;
        }

        return result;
    }
}
