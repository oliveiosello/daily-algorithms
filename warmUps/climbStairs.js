// i int
// o int
// c input greater than 1 and less than 46
//   can take 1 or 2 steps at a time
//   can utilize fib seq
// e 

// create steps arr equal to first ones of fib seq
// iterate though n, starting beyond first two nums
//   assign stemps at given i to previous val plus two  vals back (fib calculation)
// return num of steps

const climbStairs = (n) => {
    let steps = [1, 1];
    let i = 2;
  
    while (i > 1 && i <= n) {
      steps[i] = steps[i - 1] + steps[i - 2];
      i++
    }
  
    return steps[steps.length - 1];
  };
  
  // console.log(climbStairs(2))
  // console.log(climbStairs(3))