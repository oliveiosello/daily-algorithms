const searchInsert = (nums, target) => {
    if (nums.includes(target)) {
      return nums.indexOf(target);
    } else {
      nums.push(target);
      nums.sort(compare = (a, b) => a - b);
      return nums.indexOf(target)
    }  
};

// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))