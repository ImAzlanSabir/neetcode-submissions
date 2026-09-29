class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, t) {
        let res = [];
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                if (arr[i] + arr[j] === t && i !== j) {
                   res.push(i , j);

                   return res;
                }
            }
        }

        return res;
    }
}
