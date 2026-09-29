class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(arr) {
        let res = {};
        for(let i = 0 ; i < arr.length; i++){
            res[arr[i]] = (res[arr[i]] || 0) + 1
        }

        for(let i in res){
            if(res[i] > 1) return true
        }

        return false;
    }
}
