const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => (a - b));
  
    let closest = nums[0] + nums[1] + nums[2]
  
    for (let i = 0; i < nums.length - 2; i++) {
      let p1 = i + 1;
      let p2 = nums.length - 1;
  
      while (p1 < p2) {
        let sum = nums[i] + nums[p1] + nums[p2];
  
        if (sum < target) {
          p1++;
        } else {
          p2--;
        }
        if (Math.abs(sum - target) < Math.abs(closest - target)) {
          closest = sum;
        }
      }
    }
    return closest;
  };

//   console.log(threeSumClosest([-1,2,1,-4], 1)