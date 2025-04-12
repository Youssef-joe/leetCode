/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = "a";

    while(word.length < k) {
        let next = "";
        for (let i = 0; i < word.length; i++) {
            const charCode = word.charCodeAt(i);
            const nextChar = charCode === 122 ? "a" : String.fromCharCode(charCode + 1);
            next += nextChar;
        }
        word += next;
    }
    return word[k - 1];
};