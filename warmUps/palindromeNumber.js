const isPalindrome = (x) => {

    let str = x.toString().split("");
    let rev = x.toString().split("").reverse();
  
    if (str.join("") === rev.join("")) {
      return true;
    }
    return false;
  };

//   console.log(isPalindrome(121))
//   console.log(isPalindrome(-121))
//   console.log(isPalindrome(10))