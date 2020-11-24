// i str
// o arr of strs
// c 1 and 0 have no letters
// e

// create map for letts for ea num
// create arr for collected combos
// helper function to build combo strs
//   take empty str and digits
//     while digits isn't emoty
//       check each member, collect letters, reducing imput size each time
//       iterate over letters add to combo
//       recurse with new combo and next vals
//     if str is empty, add combo to combos
// while thre are digits
//   call helper starting with empty string and input str
// return combos

const letterCombinations = (digits) => {
  const letterMap = {
    1: [],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let combos = [];

  const getCombos = (combo, next) => {
    if (next.length === 0) {
      combos.push(combo);
    } else {
      let digit = next.slice(0, 1);
      let letters = letterMap[digit];
      for (let i = 0; i < letters.length; i++) {
        let letter = letterMap[digit].slice(i, i + 1);
        getCombos(combo + letter, next.slice(1));
      }
    }
  };

  if (digits.length !== 0) {
    getCombos("", digits);
  }
  return combos;
};

//   console.log(letterCombinations("2358"))
