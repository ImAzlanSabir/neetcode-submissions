class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let values = {};
        for(let i = 0; i < nums.length; i++){
            values[nums[i]] = (values[nums[i]] || 0) + 1;
        }

        for(let value in values){
            if(values[value] > 1) return true
        }

        return false;

    }
}
