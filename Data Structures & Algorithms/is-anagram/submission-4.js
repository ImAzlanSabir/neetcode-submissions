class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sval = {};
        let tval = {};
        for (let i = 0; i < s.length; i++) {
            sval[s[i]] = (sval[s[i]] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            tval[t[i]] = (tval[t[i]] || 0) + 1;
        }

        if(Object.keys(sval).length !== Object.keys(tval).length) return false;

        for(let i in sval){
            if(sval[i] === tval[i]) continue;
            else return false;
        }

        return true;
    }
}
