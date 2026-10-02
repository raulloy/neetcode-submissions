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

        console.log('i', i, 'j', j);

        const length = Number(str.slice(i, j));
        console.log('length', length);

        const wordStart = j + 1;
        console.log('wordStart', wordStart);

        const wordEnd = wordStart + length;
        console.log('wordEnd', wordEnd);

        result.push(str.slice(wordStart, wordEnd));

        i = wordEnd;
    }

    console.log(result);

    return result;
    }
}
