const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      let first = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        let second = nums[j];
        if (first + second === target) {
          return ([i, j]);
        }
      } 
    }
    return [0, 1];
  };

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))