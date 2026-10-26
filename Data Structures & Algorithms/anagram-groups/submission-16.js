class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {}

        for(let str of strs){
            const key = str.split('').sort().join('')
            
            if(!groups[key]){
                groups[key] = []
            }
            groups[key].push(str)
        }

        return Object.values(groups)
    }
}