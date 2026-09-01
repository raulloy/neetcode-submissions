const sameFrequency = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (let str of strs) {
            const key = str.split('').sort().join('');

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(str);
        }

        return [...groups.values()];
    }
}
