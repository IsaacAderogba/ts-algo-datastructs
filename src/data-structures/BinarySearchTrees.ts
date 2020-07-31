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
}
