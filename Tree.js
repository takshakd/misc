"use strict";

class Tree {
  constructor(rootNode) {
    this.root = rootNode;
  }

  print() {
    this.root.print();
  }
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  print() {
    console.log(this.val);
    if (this.left != null){
      this.left.print();
    }
    if (this.right != null) {
      this.right.print();
    }
  }
}

module.exports = {
  Tree: Tree,
  TreeNode: TreeNode
};
