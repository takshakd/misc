var treelib = require("./Tree");

var Tree = treelib.Tree;
var TreeNode = treelib.TreeNode;

var finalPath = null;

function getPathRec(path, node, t) {
  if (node.left === null && node.right === null) {
    if (node === t) {
      // var finalPath = path.slice();
      // finalPath.push(node.val);
      // console.log(finalPath);
      // return finalPath;
      finalPath = path.slice();
      finalPath.push(node.val);
    } else {
      console.log("Reached bad node");
    }
  } else {
    path.push(node.val);
    if (node.left !== null) {
      return getPathRec(path.slice(), node.left, t);
    }
    if (node.right !== null) {
      return getPathRec(path.slice(), node.right, t);
    }
  }
}

function lowestCommonAncestor(tree, a, b) {

}

var n5 = new TreeNode(5, null, null);
var n6 = new TreeNode(6, null, null);
var n4 = new TreeNode(4, null, null);
var n3 = new TreeNode(3, n5, n6);
var n2 = new TreeNode(2, null, null);
var n1 = new TreeNode(1, n3, n4);
var root = new TreeNode(0, n1, n2);
var t = new Tree(root);

console.log(getPathRec([], t.root, n4));
console.log(finalPath);
