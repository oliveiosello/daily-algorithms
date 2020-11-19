// i arr of nums
// o arr of nums
// c need to manage carry over vals
//     right to left
//     starts at one (num adding)
//   arr is at least length 1
// e 

// iterate through arr starting at end
// set carry
// while i is not at start of arr
//   set num to sum of current digit and carry
//   set carry to lowest end of num divided by 10
//   alter current digit to be value of num mod 10
// check if carry still exists
//   add to front of arr
// return arr

const plusOne = (digits) => {
    let i = digits.length - 1;
    let num = 0;
    let carry = 1;
  
    while (i >= 0) {
      num = digits[i] + carry;
      carry = Math.floor(num / 10);
      digits[i] = num % 10;
      i--;
    }
  
    if (carry) {
      digits.unshift(carry);
    }
    
    return digits;
  };
  
  console.log(plusOne([1,2,3]))