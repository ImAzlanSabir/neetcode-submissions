class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sObj={};
        let tObj={};

        if (s.length !== t.length) return false;
        for(let i = 0; i < s.length; i++){
            sObj[s[i]] = (sObj[s[i]] || 0) + 1
            tObj[t[i]] = (tObj[t[i]] || 0) + 1
        }

        for (let key in sObj){
            if (sObj[key] === tObj[key]) continue;
            else return false;
        }

        return true;
        
    }
}
