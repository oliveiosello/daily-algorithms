// i 2 arrs of nums
// o arr
// c vals can be negative
//   nums1 will have space for nums2
// e can return new arr?
//   nums2 empty?

// create count var to track zeroes
// iterate over nums1
//   check if curr is zero
//     if yes, increase count
//     if count equals n
//       remove zeroes from nums1
// add nums2 to nums1
// return sorted arr


const merge = (nums1, m, nums2, n) => {
    let count = 0;   
      for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0) {
          count++;
          if (count == n) {
            nums1.splice(nums1.length - n);
          }
        }
      }
      nums1.push(...nums2);
      return nums1.sort((a, b) => a -b);
  };