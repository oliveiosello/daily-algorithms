// i str num
// o str
// c for every n rows letter at zero
//.  num of rows - 2 = how many letters zag
//   store in matrix
//.    json stringify for return
//.  track bottom and top
//.    if row = 0 or row = num rows, skip
// e empty str
//.  str length less than num of rows
//.  one row


// create empty matrix with n num of rows
//.   fill with empty strings
// iterate over str
//   


const convert = (str, numRows) => {
    if (str === "" || str.length < 2 || numRows < 2) {
      return str;
    }
  
    let zigZag = Array(numRows).fill("").map( () => Array(numRows).fill(""))
    let currRow = 0;
    let down = true;
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      zigZag[currRow].push(letter);
      if (down === true) {
        currRow++;
      } else {
        currRow--;
      }
      if (currRow === numRows - 1 || currRow === 0) {
        down = !down;
      }
    }
    zigZag.forEach((row) => {
      result += row.join("");
    });
    return result;
  }

//   console.log(zigZag("PAYPALISHIRING", 3))
//   console.log(zigZag("PAYPALISHIRING", 4))