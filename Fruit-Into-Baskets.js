/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let maxFruiet = 0;
    const fruitMap = new Map();
    let left = 0;

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right];
        fruitMap.set(fruit, (fruitMap.get(fruit) || 0) + 1);

        while (fruitMap.size > 2) {
            const leftFruit = fruits[left];
            fruitMap.set(leftFruit, (fruitMap.get(leftFruit)) - 1);
            if (fruitMap.get(leftFruit) === 0) {
                fruitMap.delete(leftFruit);
            };
            left++
        }
        maxFruiet = Math.max(maxFruiet, right - left + 1);
    }
    return maxFruiet
    
};