/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charIndexMap = {};
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (char in charIndexMap && charIndexMap[char] >= left) {
            left = charIndexMap[char] + 1;
        };
        charIndexMap[char] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength
    
};