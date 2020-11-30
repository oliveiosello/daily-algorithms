// i arr, num
// o arr
// c target can appear < or > 2 times
//   in the event of once, position should be same num
//   more than twice, second position should be last occurence
// e no target returns -1,-1

// set return arr to default if not found
// iterate over nums from start
//   if target is found, reassign first position and break
// iterate over nums from end
//   reassign if found, break
// return arr

const searchRange = (nums, target) => {
  let position = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      position[0] = i;
      break;
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] === target) {
      position[1] = j;
      break;
    }
  }

  return position;
};
