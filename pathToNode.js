var treelib = require("./Tree");

var Tree = treelib.Tree;
var TreeNode = treelib.TreeNode;


function visitNode(node, targetNode, path) {
  if (node === targetNode) {
    path.push(node.val);
    return path;
  }
  if (node.left !== null) {
    var leftRes = visitNode(node.left, targetNode, path);
    return leftRes.push(node.val);
  }
  if (node.right !== null) {
    var rightRes = visitNode(node.right, targetNode, path);
    return rightRes.push(node.val);
  }
}

function pathToNode(node, tree) {
  var path = visitNode(tree.root, node, []);
  return path;
}

var n5 = new TreeNode(5, null, null);
var n6 = new TreeNode(6, null, null);
var n4 = new TreeNode(4, null, null);
var n3 = new TreeNode(3, n5, n6);
var n2 = new TreeNode(2, null, null);
var n1 = new TreeNode(1, n3, n4);
var root = new TreeNode(0, n1, n2);
var t = new Tree(root);

console.log(pathToNode(n5, t));
