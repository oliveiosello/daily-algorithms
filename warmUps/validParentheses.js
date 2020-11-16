const isValid = (s) => {
    if (s.length % 2 === 1) {
      return false;
    }
  
    const pairs = {
      ")": "(",
      "]": "[",
      "}": "{"
    }
  
    let opens = [];
    let close = 0;
    
    for (let i = 0; i < s.length; i++) {
      let paren = s[i];
      if (paren === "(" || paren === "[" || paren === "{") {
        opens.push(paren);
      }
      if (paren === ")" || paren === "]" || paren === "}") {
        close++;
        if (pairs[paren] === opens[opens.length - 1]) {
          opens.pop();
          close--;
        }
      }
    }
    if (opens.length === 0 && close === 0) {
      return true
    }
    return false;
  };

//   console.log(isValid("()"))
//   console.log(isValid("()[]{}"))
//   console.log(isValid("(]"))
//   console.log(isValid("([)]"))
//   console.log(isValid("{[]}"))