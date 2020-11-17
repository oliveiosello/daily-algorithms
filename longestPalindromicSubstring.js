// i str
// o str
// c helper func to determine palindrome
// e if str is empty
//   if no palindrome




const longestPalindrome = (s) => {
    let longest = ""; 
    for (var i = 0; i < s.length; i++) {
        let p1 = isPalindrome(s, i, i);
        if (p1.length > longest.length) {
            longest = p1
        }
        p1 = isPalindrome(s, i, i + 1);
        if (p1.length > longest.length) {
            longest = p1
        }
    }
    return longest;
};


const isPalindrome = (str, i, j) => {
    while (str[i] === str[j] && i >= 0 && j < str.length) {
        i--;
        j++;
    }
    return str.slice(i + 1, j);
};

// console.log(longestPalindrome("cbbd"))
// console.log(longestPalindrome("a"))