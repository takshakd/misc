var treelib = require("./Tree");

var Tree = treelib.Tree;
var TreeNode = treelib.TreeNode;

function findPath(root, t, path) {
  if (root === null) {
    return false;
  }
  if (root === t) {
    path.push(root.val);
    return true;
  }
  if (root.left !== null && findPath(root.left, t, path)) {
    path.push(root.val);
    return true;
  }
  if (root.right !== null && findPath(root.right, t, path)) {
    path.push(root.val);
    return true;
  }
  return false;
}

function lowestCommonAncestor(tree, a, b) {
  var patha = [];
  findPath(tree.root, a, patha);
  patha.reverse();
  var pathb = [];
  findPath(tree.root, b, pathb);
  pathb.reverse();
  for (var i = 0; i < patha.length; i++) {
    if (patha[i] !== pathb[i]) {
      break;
    }
  }
  return patha[i-1];
}

function lcaRec(root, a, b) {
  if (root === null) {
    return null;
  }
  if (root === a || root === b) {
    return root;
  }
  var leftLca = lcaRec(root.left, a, b);
  var rightLca = lcaRec(root.right, a, b);
  if (leftLca !== null && rightLca !== null) {
    return root;
  }
  return leftLca !== null ? leftLca : rightLca;
}


var n5 = new TreeNode(5, null, null);
var n6 = new TreeNode(6, null, null);
var n4 = new TreeNode(4, null, null);
var n3 = new TreeNode(3, n5, n6);
var n2 = new TreeNode(2, null, null);
var n1 = new TreeNode(1, n3, n4);
var n0 = new TreeNode(0, n1, n2);
var t = new Tree(n0);

console.log(lowestCommonAncestor(t, n5, n4));
console.log(lcaRec(t.root, n5, n4).val);

console.log(lowestCommonAncestor(t, n5, n6));
console.log(lcaRec(t.root, n5, n6).val);

console.log(lowestCommonAncestor(t, n5, n2));
console.log(lcaRec(t.root, n5, n2).val);
