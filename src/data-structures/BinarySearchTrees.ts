/**
 * Bit of a step up from Linked Lists - different types of trees (trees, binary trees, binary search trees)
 * Tree: A data structure that consists of nodes in a parent/child relationship
 * Can't have siblings point to siblings, strictly parent pointing to child
 * Siblings are nodes with the same parent
 * Leaf is a node with no children
 * Edge is the connection between one node and another
 *
 * Lists are linear, Trees are nonlinear (multiple ways to traverse a tree)
 *
 * Examples
 * - HTML DOM (dev tools and debugger)
 * - Network routing
 * - Abstract Syntax Tree (parsing and making sure it's valid syntax)
 * - Artificial Intelligence (Mini-Max decision tree for Tic Tac Toe game, look at all combinations)
 * - Folders in an operating system (Things with parent-child relationships are often trees)
 * - JSON
 * - Figma
 *
 * Binary Trees (Also Ternary trees)
 * - Each node can have AT MOST 2 children
 * - BSTs are special cases, that are sorted in a particular way
 *    - Used for when there's a way to compare things (some bigger, some less)
 *    - Search and Insertion become very quick (allows divide and conquer)
 */

export class Node<T> {
  value: T;
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinarySearchTree<T> {
  root: Node<T> | null = null;

  insert(value: T) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let traversingNode = this.root;

      while (true) {
        if (value === traversingNode.value) {
          break;
        } else if (value > traversingNode.value) {
          if (traversingNode.right) {
            traversingNode = traversingNode.right;
          } else {
            traversingNode.right = newNode;
            break;
          }
        } else {
          if (traversingNode.left) {
            traversingNode = traversingNode.left;
          } else {
            traversingNode.left = newNode;
            break;
          }
        }
      }
    }

    return this;
  }

  find(value: T) {
    if (!this.root) return undefined;

    let traversingNode = this.root;
    let foundNode: Node<T> | null = null;

    while (!foundNode) {
      if (traversingNode.value === value) {
        foundNode = traversingNode;
      } else if (value > traversingNode.value) {
        if (traversingNode.right) {
          traversingNode = traversingNode.right;
        } else {
          break; // not found
        }
      } else {
        if (traversingNode.left) {
          traversingNode = traversingNode.left;
        } else {
          break; // not found
        }
      }
    }

    return foundNode;
  }
}

const tree = new BinarySearchTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(6);
console.log(tree.find(2));
