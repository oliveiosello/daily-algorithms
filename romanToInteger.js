const numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  
  
  const romanToInt = (s) => {
    let num = 0;
    
    for (let i = 0; i < s.length; i++) {
      let curr = s[i];
      let next = s[i + 1];
  
      if (numerals[curr] < numerals[next]) {
        num += numerals[next] - numerals[curr];
        i += 1
      } else {
        num += numerals[curr]
      }
    }
    return num;
  };

  
//   console.log(romanToInt("III"))
//   console.log(romanToInt("IV"))
//   console.log(romanToInt("IX"))
//   console.log(romanToInt("LVIII"))