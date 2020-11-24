// i arr, num
// o num
// c can change order of arr
//   arr will also be returned, input passed as ref
//   must modify in place
// e empty arr?

// create pointer for easy reassignment
// iterate over input arr
// check for non equality
//   keep val same by assigning val at pointer to val of element in interation
//   increment pointer
// return i (represents length)

const removeElement = (nums, val) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// console.log(removeElement([0,1,2,2,3,0,4,2], 2))
