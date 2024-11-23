/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let result = [...new Set(nums)];
  
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
  return result.length;
};