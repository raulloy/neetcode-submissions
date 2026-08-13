class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const frequency = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    frequency[s.charCodeAt(i) - 97]++;
    frequency[t.charCodeAt(i) - 97]--;
  }

  for (let count of frequency) {
    if (count !== 0) return false;
  }

  return true;
    }
}
