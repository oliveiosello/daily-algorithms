// i root
// o bool
// c only given root
// e if root is null still symmetric technically

// create helper to recurse on tree and separate sides
//   base case if both are null return true
//   if only one is null return false
//   if value of each side is equal, recruse on left and right for each side

// main function
//   handle edge case
//   return helper on left and right of root

const isSymmetric = (root) => {
  if (root === null) {
    return true;
  }
  return checkNodes(root.left, root.right);
};

const checkNodes = (tree1, tree2) => {
  if (tree1 === null && tree2 == null) {
    return true;
  }
  if (tree1 === null || tree2 == null) {
    return false;
  }

  return (
    tree1.val === tree2.val &&
    checkNodes(tree1.left, tree2.right) &&
    checkNodes(tree1.right, tree2.left)
  );
};
