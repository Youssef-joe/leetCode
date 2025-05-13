/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = 1e9 + 7;
    let count = Array(26).fill(0);
    let res = s.length;
    let z = 25;

    for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    while (t--) {
        res = (res + count[z]) % MOD;
        count[(z+1) % 26] = (count[(z+1)%26] + count[z]) % MOD;
        z = (z + 25) % 26;
    }
    return res
};