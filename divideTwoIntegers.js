// i 2 nums
// o num
// c floor results
// e 32 bit ints

// determine negative set to bool
// set quotient count to zero
// calculate abs of both inputs
// helper func to calc diff of divid and divis
//   call with divid and 1 as temp quotient
// check negative to determine sign of return and return quotient

const divide = (dividend, divisor) => {

    if (dividend === -2147483648 && divisor === -1) {
          return 2147483647;
      }
      
      let isNeg = dividend > 0 ^ divisor > 0;
      let quotient = 0;
      
      dividend = Math.abs(dividend);
      divisor = Math.abs(divisor);
      
      const calculate = (d, q) => {
          if (dividend > d) {
              calculate(d + d, q + q);
          }
          if (dividend >= d) {
              dividend -= d;
              quotient += q;
          }
      }
  
      calculate(divisor, 1);
      
      return isNeg ? -quotient : quotient;
  }
  
//   console.log(divide(-2147483648, -1));
//   console.log(divide(1, 1));