// i 2 nodes
// o bool
// c recurse
// e empty nodes

// base cases:
//   if both null, return true
//     handles empty and leaves
//   if either are null or their vals are not equal, return false
// recurse on left and right for both nodes

const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }
  if (!p || !q || p.val !== q.val) {
    return false;
  }
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

//   console.log(isSameTree([1,2,3], [1,2,3]))
