// i int
// o roman numeral
// c account for combination romans in arr to reduce need for calculations
// e num is 0

// create arr representing all roman numerals
// create arr repping all nums
// create converted str
// iterate over num arr
//  while number is less or equal to input
//    add numeral at corresponding index to str
//    subtract value from input
// return converted str

const intToRoman = (num) => {
    let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV",   "I"];
    let converted = "";
  
    for (let i = 0; i < numbers.length; i++) {
      let value = numbers[i];
  
      while (value <= num) {
        converted += numerals[i];
        num -= value;
      }
    }
    return converted;
  };

//   console.log(intToRoman(3))
//   console.log(intToRoman(19))