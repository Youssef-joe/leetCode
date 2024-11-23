/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let result = nums.filter((e) => {
        return e !== val;
    })
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i]
    };

    return result.length
};