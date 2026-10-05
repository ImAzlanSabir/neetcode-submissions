class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2) return false;
        let brack = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        let stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
                stack.push(s[i]);
            } else {
                let elem = stack.pop();
                if (elem === brack[s[i]]) continue;
                else return false;
            }
        }

        return stack.length === 0;
    }
}
