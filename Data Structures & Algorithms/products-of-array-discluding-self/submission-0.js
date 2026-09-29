class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pos = 0;
        let res = [];

        while (pos < nums.length) {
            let total;
            let val = nums.filter((_, x) => x !== pos);
            res.push(val.reduce((acc, curr) => acc * curr));
            pos++;
        }

        return res;
    }
}
