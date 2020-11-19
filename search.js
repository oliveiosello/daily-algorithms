// i arr of nums, num
// o num
// c input is sorted ascending, but could be mixed at some point (?)
//     not certain of why sorting or not affects result if we are meant to return index of where target currently exists
// e return -1 if not found

// handle edge case, by seeing if includes
// iterate over nums
//   check equality to target
//     return index if equal


const search = (nums, target) => {
    if (!nums.includes(target)) {
      return -1
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
  };
  
  console.log(search([4,5,6,7,0,1,2], 0)) // 4
  console.log(search([4,5,6,7,0,1,2], 3)) // -1