class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(arr) {

        for(let i = 0; i < arr.length; i++){
            let count = -1;
            for(let j = 0; j < arr.length; j++){
                if(arr[i] === arr[j]){
                    count++;
                }
            }

            if(count > 0) return true;
        }

        return false;
    }
}
