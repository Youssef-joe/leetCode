/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let result = [];
    let repeats = new Array(10).fill(0);

    for (let num of digits) {
        repeats[num]++
    }
    for (let i = 100; i <= 999; i+= 2) {
        let hundreds = Math.floor(i / 100);
        let tens = Math.floor((i % 100) / 10);
        let ones = i % 10;
        let correct = true;

        if (--repeats[hundreds] < 0 ) {
            correct = false
        }
        if (--repeats[tens] < 0) {
            correct = false
        }
        if (--repeats[ones] < 0) {
            correct = false
        }
        if (correct) {
            result.push(i);
        }
        repeats[hundreds]++;
        repeats[tens]++
        repeats[ones]++

    }
    return result;
};