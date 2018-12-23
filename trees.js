/***********************
 ******  Creating A Tree (my first try, not so good)
 ************************/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  _findNode(value) {
    let currentNode = this.root;
    let temp;

    while (currentNode) {
      if (currentNode.value === value) {
        console.log('Such node exists');
        return currentNode;
      }
      if (currentNode.value > value) {
        temp = currentNode;
        currentNode = currentNode.left;
      } else {
        temp = currentNode;
        currentNode = currentNode.right;
      }
    }
    return temp;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let temp = this._findNode(value);

      if (newNode.value > temp.value) {
        temp.right = newNode;
      } else {
        temp.left = newNode;
      }

    }
    return this;
  }

  lookup(value) {

    //const check = this.findNode(value);
    let currentNode = this.root;
    let temp;

    while (currentNode) {
      if (currentNode.value === value) {
        console.log('Such node exists');
        return currentNode;
      }
      if (currentNode.value > value) {
        temp = currentNode;
        currentNode = currentNode.left;
      } else {
        temp = currentNode;
        currentNode = currentNode.right;
      }
    }

    return 'Such node does not exist';
  }
}

const myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(20);
myTree.insert(30);
myTree.insert(15);
myTree.lookup(20);

function traverse(node) {
  const tree = {
    value: node.value
  };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
JSON.stringify(traverse(myTree.root));

/***********************
 ******  Creating A Tree (better implementation)
 ************************/

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
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          //left
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else {
          //right
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return 'Such node does not exist';
  }

  remove(value) {
    let currentNode = this.root;
    let parentNode = null;
    if (!currentNode) {
      return 'Tree is already empty';
    }
    if (!currentNode.right && !currentNode.left) {
      this.root = null;
      return this;
    }

    //let removable;
    //let temp;
    //let replacement;

    while (currentNode) {
      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else { // currentNode.value === value

        if (!currentNode.right) { //1. there is no right child of removable

          if (!parentNode) { // and root is to be removed
            this.root = currentNode.left;
            return this;
          }

          // if removed node is < than parent
          if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left;
            return this;
          }
          // if removed node is > than parent
          if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.left;
            return this;
          }

        } else if (!currentNode.right.left) { //2. there is a right child with no left child

          if (!parentNode) { // and root is to be removed
            this.root.value = currentNode.right.value;
            this.root.right = currentNode.right.right;
            return this;
          }

          // if removed node is < than parent
          if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.right;
            return this;
          }
          // if removed node is > than parent
          if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
            return this;
          }
        } else { //3. there is a right child with left child
          console.log('shikna'); // to finish!!!!
          return this;
        }

        currentNode = null;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(22)
tree.insert(26)
tree.remove(20);
/*tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//JSON.stringify(traverse(tree.root))*/

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = {
    value: node.value
  };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//tree.lookup(25);
//tree.remove(9);
JSON.stringify(traverse(tree.root));