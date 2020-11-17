// i str
// o num
// c can be letters, dig, symbs, spaces
// e empty str should return 0
//   what if tie?



const lengthOfLongestSubstring = (s) => {
    let longest = 0;
      
  
    for (let i = 0; i < s.length; i++) {
      let counter = 0;
      let seen = {};
      
      let char = s[i];
      while (char && !seen[char]) {
          counter++;
          seen[char] = true;
          char = s[i + counter];
      }
        
      if (counter > longest) {
          longest = counter;
      }
  
  
    }
        
    return longest;
  }

//   console.log(lengthOfLongestSubstring("abcabcbb"))
//   console.log(lengthOfLongestSubstring("bbbbb"))