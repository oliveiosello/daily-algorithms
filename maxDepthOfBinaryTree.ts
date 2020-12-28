// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// i tree
// o num
// c track seen with stack
// e

// create stack to store node and associated depth
//   add root and depth of 1 as base val
// create var to track max depth
// while the stack is not empty
//   pop off item in stack
//     if node has a value
//       set max to largest value, either max or curr node depth
//       push left and right onto stack, incrementing depth
// return max

function maxDepth(root: TreeNode | null): number {
  type StackNode = {
    node: TreeNode | null;
    depth: number;
  };

  const stack: StackNode[] = [{ node: root, depth: 1 }];

  let max = 0;

  while (stack.length) {
    const { node, depth } = stack.pop() as StackNode;
    if (node) {
      max = Math.max(max, depth);
      stack.push({ node: node.left, depth: depth + 1 });
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }

  return max;
}
