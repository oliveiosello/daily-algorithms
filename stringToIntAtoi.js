// i string
// o num
// c numerical val defined by
//     start with num or -/+
//     ends with first break of num seq
// e return 0 if not valid
     

const myAtoi = (s) => {
  s = s.trim();
  if (!s) {
    return 0;
  }

  let sign = s[0] === '-' ? -1 : 1;

  if (s[0] === '-' || s[0] === '+') {
    s = s.slice(1);
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const digit = parseDigit(s[i])
    if (digit >= 0) {
      result = result * 10 + digit;
    } 
    else {
      break;
    }
  }
  result = result * sign;
  if (sign === -1 && result < -0x80000000) {
    return -0x80000000;
  }

  if (result > 0x7fffffff) {
    return 0x7fffffff;
  }

  return result;
};

const parseDigit = (num) => {
  if (num === '0') {
    return 0;
  }
  if (num === '1') {
    return 1;
  }
  if (num === '2') {
    return 2;
  }
  if (num === '3') {
    return 3;
  }
  if (num === '4') {
    return 4;
  }
  if (num === '5') {
    return 5;
  }
  if (num === '6') {
    return 6;
  }
  if (num === '7') {
    return 7;
  }
  if (num === '8') {
    return 8;
  }
  if (num === '9') {
    return 9;
  }
  return -1;
}