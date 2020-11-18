// i arr of nums
// o num (sum)
// c faster solution possible with divide and conquor
// e nums will always have at least 1 len

// create largest var
// create temp var
// iterate over arr
//   set temp sum to max of sum of temp and curr and curr
//   set largest to max of temp and largest
// return largest

const maxSubArray = (nums) => {    
    let largestSum =nums[0];
    let tempSum = 0;
      
    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      tempSum = Math.max((tempSum + curr), curr);
      largestSum = Math.max(tempSum, largestSum);
    }
      
    return largestSum;
  };