  // i arr
  // o num
  // c amount is area of rectangle
  //     distance between columns x max height of pair
  // e empty arr
  
  // expensive solution
  //   create largest var
  //   iterate over arr
  //     check area of each possible combination
  //       area = distance from i to pair x smaller of the pair
  //       if area is larger than largest, replace

var maxArea = function(height) {
    let mostWater = 0;
  
    for (let i = 0; i < height.length; i++) {
      let line = height[i];
  
      for (let j = 0; j < height.length; j++) {
        let pair = height[j];
        let distance = j - i;
        let smallest = line < pair ? line : pair;
  
        if (distance * smallest > mostWater) {
          mostWater = distance * smallest
        }
      }
    }
    return mostWater
  };

//   console.log(maxArea([1,8,6,2,5,4,8,3,7]))