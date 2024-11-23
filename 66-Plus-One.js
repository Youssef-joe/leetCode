/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1; // Increment the current digit
            return digits; // Return the array if no carry is needed
        }
        digits[i] = 0; // Set the current digit to 0 if it was 9
    }
    // If all digits were 9, add a new 1 at the start
    digits.unshift(1);
    return digits;
};