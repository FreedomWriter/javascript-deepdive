class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // console.log(this.root);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let curNode = this.root;
      /* Because our while loop is based on the condition true, we need to be careful to ensure that we break the loop )because true will always be true*/
      while (true) {
        if (value < curNode.value) {
          if (!curNode.left) {
            curNode.left = newNode;
            return this;
          } else {
            curNode = curNode.left;
          }
        } else {
          if (!curNode.right) {
            curNode.right = newNode;
            return this;
          } else {
            curNode = curNode.right;
          }
        }
      }
    }
  }

  // // my implementation
  // lookup(value) {
  //   let curNode = this.root;
  //   while (true) {
  //     if (curNode.value === value) {
  //       return true;
  //     } else if (curNode.value > value) {
  //       if (curNode.left) {
  //         curNode = curNode.left;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       if (curNode.right) {
  //         curNode = curNode.right;
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
  // }

  // instructors implementation
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let curNode = this.root;
    while (curNode) {
      if (curNode.value > value) {
        curNode = curNode.left;
      } else if (curNode.value < value) {
        curNode = curNode.right;
      } else if (curNode.value === value) {
        return curNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let curNode = this.root;
    let parentNode = null;
    while (curNode) {
      if (value < curNode.value) {
        parentNode = curNode;
        curNode = curNode.left;
      } else if (value > curNode.value) {
        parentNode = curNode;
        curNode = curNode.right;
      } else if (curNode.value === value) {
        //we have a match

        // Option 1: curNode has no R child
        if (curNode.right === null) {
          if (parentNode === null) {
            this.root = curNode.left;
          } else {
            // if parent is greater than the current value, make current left child a child of parent
            if (curNode.value < parentNode.value) {
              parentNode.left = curNode.left;

              //if parent is less than current value, make left child a right child of parent
            } else if (curNode.value > parentNode.value) {
              parentNode.right = curNode.left;
            }
          }

          // Option 2: R child that doesn't have a L child
        } else if (curNode.right.left === null) {
          if (parentNode === null) {
            this.root = curNode.left;
          } else {
            curNode.right.left = curNode.left;

            // if parent is greater than current, make right child of the left the parent
            if (curNode.value < parentNode.value) {
              parentNode.left = curNode.right;

              // if parent is less than current, make right child a right child of the parent
            } else if (curNode.value > parentNode.value) {
              parentNode.right = curNode.right;
            }
          }

          // Option 3: R child that has a left child
        } else {
          // find the R childs left most chld
          let leftMost = curNode.right.left;
          let leftMostParent = curNode.right;
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          // Parent's left subtree is not wlefMost's right subtree
          leftMostParent.left = leftMost.right;
          leftMost.left = curNode.left;
          leftMost.right = curNode.right;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (curNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          } // end of parntNode === null else
        } //larger else
        return true;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
// console.log(bst.lookup(9));
// console.log(bst.lookup(4));
// console.log(bst.lookup(6));
// console.log(bst.lookup(20));
// console.log(bst.lookup(170));
// console.log(bst.lookup(15));
// console.log(bst.lookup(44));
// console.log(bst.remove(4));
// console.log(bst.lookup(4));
// console.log(bst);
// console.log(JSON.stringify(traverse(bst.root)));
// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
