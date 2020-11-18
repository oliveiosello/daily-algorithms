// i str
// o num (length)
// c if single word str
// e if emoty return 0

// trim and split str on spaces
// return length of last element of words


const lengthOfLastWord = (s) => {
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
  };
  
  
//   console.log(lengthOfLastWord("Hello World"))
//   console.log(lengthOfLastWord("a "))