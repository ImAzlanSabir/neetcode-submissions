class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        console.log(str);
        let start = 0;
        let end = str.length - 1;

        while (start < end) {
            if (str[start] !== str[end]) {
                console.log(str[start], str[end]);
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
