/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let freqs = {};
    let res = 0;
    let i = 0;
    let maxFreq = 0;

    for (let j = 0; j < s.length; j++) {
        freqs[s[j]] = (freqs[s[j]] || 0) + 1;
        maxFreq = Math.max(maxFreq, freqs[s[j]]);

        while ((j - i + 1) - maxFreq > k) {
            freqs[s[i]] -= 1;
            i++
        }
        res = Math.max(res, j - i + 1);
    }
    return res
    
};