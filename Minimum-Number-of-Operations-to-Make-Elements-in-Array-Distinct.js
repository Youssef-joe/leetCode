/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums, ops = 0) {
   if (new Set(nums).size === nums.length) {
    return ops;
   }
   const newNums = nums.length >= 3 ? nums.slice(3) : [];
   return minimumOperations(newNums, ops + 1);
};