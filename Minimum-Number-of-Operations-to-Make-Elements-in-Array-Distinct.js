/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums, ops = 0) {
    const unique = new Set();
    let hasDuplicates = false;
    
    // Early exit if duplicates found
    for (const num of nums) {
        if (unique.has(num)) {
            hasDuplicates = true;
            break;
        }
        unique.add(num);
    }
    
    if (!hasDuplicates) return ops;
    
    return minimumOperations(
        nums.length >= 3 ? nums.slice(3) : [],
        ops + 1
    );
};