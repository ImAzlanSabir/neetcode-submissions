class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let value = {};

        for (let i = 0; i < nums.length; i++) {
            value[nums[i]] = (value[nums[i]] || 0) + 1;
        }

        // console.log(value);
        for (let key in value) {
            //    console.log(value[key])
            if (value[key] > 1) return true;
        }

        return false;
    }
}
