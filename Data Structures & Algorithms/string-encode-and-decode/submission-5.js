class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
  let encoded = '';

  for (let s of strs) {
    encoded += s.length + '#' + s;
  }

  return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
  let strings = [];
  let i = 0;

  while (i < str.length) {
    let j = i;

    while (str[j] !== '#') {
      j++;
    }

    const wordLength = Number(str.slice(i, j));

    const wordStart = j + 1;
    const wordEnd = wordStart + wordLength;

    strings.push(str.slice(wordStart, wordEnd));

    i = wordEnd;
  }

  console.log(strings);

  return strings;
    }
}
