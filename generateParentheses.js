const generateParenthesis = (n) => {
    const result = []

    const go = (left, right, str) => {
        if (left === 0 && right === 0) result.push(str)
        if (left > 0) go(left - 1, right + 1, str + "(")
        if (right > 0) go(left, right - 1, str + ")")
    }

    go(n, 0, "")

    return result
};

// console.log(generateParenthesis(3))
// console.log(generateParenthesis(1))