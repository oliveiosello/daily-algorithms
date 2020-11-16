const strStr = (haystack, needle) => {
    if (needle.length === 0) {
      return 0;
    }
    if (haystack.includes(needle)) {
      return haystack.indexOf(needle);
    }
    return -1
  };

//   console.log(strStr("hello", "ll"))