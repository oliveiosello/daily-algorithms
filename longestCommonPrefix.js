const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
      return "";
    }
  
    let prefix = strs[0];
  
    for (let i = 1; i < strs.length; i++) {
      let str = strs[i];
      while (str.indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
    }
  
    return prefix;
  };

//   console.log(longestCommonPrefix(["flower","flow","flight"]))
//   console.log(longestCommonPrefix(["dog","racecar","car"]))