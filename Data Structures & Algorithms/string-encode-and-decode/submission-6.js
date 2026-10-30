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
        let len = 0;
        let strings = [];

        for (let i = 0; i < str.length; i++) {
            if (str[i + 1] === '#') {
                len = str[i] * 1;
                strings.push(str.slice(i + 2, i + 2 + len));
                i = i + 1 + len;
            }
        }
        return strings;
    }
}
