const threeSum = (nums) => {
    nums.sort((a, b) => {
      return a - b;
    });
  
    let triplets = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      let first = i;
      let second = i + 1;
      let third = nums.length - 1;
  
      if (first > 0 && nums[first] === nums[first - 1]) {
        continue;
      }
  
      while (second < third ) {
        let sum = nums[first] + nums[second] + nums[third];
  
        if (sum < 0) {
          second++;
        } else if (sum > 0) {
          third--;
        } else {
          triplets.push([nums[first], nums[second], nums[third]]);
  
          while (nums[second] === nums[second + 1]) {
            second++;
          }
  
          while (nums[third] === nums[third - 1]) {
            third--
          }
  
          second++;
          third--;
        }
      }
    }
    return triplets;
  }

//   console.log(threeSum([-1,0,1,2,-1,-4]))