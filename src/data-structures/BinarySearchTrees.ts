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
 *
 * How to traverse the tree? Visit every node one time?
 */

import { Queue } from "./Queues";

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
    if (!this.root) return null;

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

  /**
   * Like a 1:2 ratio
   * For every node with dequeue from the todoQueue, there can potentially be two more added
   * And it's breadth-first because it's really just first-in first-out
   */
  bfs() {
    if (!this.root) return;

    const todoQueue = new Queue<Node<T>>();
    const visitedQueue = new Queue<Node<T>>();
    todoQueue.enqueue(this.root);

    while (todoQueue.size !== 0) {
      const dequeuedNode = todoQueue.dequeue()?.value;

      if (dequeuedNode) {
        visitedQueue.enqueue(dequeuedNode);
        if (dequeuedNode.left) todoQueue.enqueue(dequeuedNode.left);
        if (dequeuedNode.right) todoQueue.enqueue(dequeuedNode.right);
      }
    }

    return visitedQueue;
  }

  dfs(order: "pre" | "post" | "in" = "pre") {
    if (!this.root) return;

    const visitedQueue = new Queue<Node<T>>();
    function traverse(node: Node<T>) {
      if (order === "pre") visitedQueue.enqueue(node);
      if (node.left) traverse(node.left);
      if (order === "in") visitedQueue.enqueue(node);
      if (node.right) traverse(node.right);
      if (order === "post") visitedQueue.enqueue(node);
    }

    traverse(this.root);
    return visitedQueue;
  }
}

const tree = new BinarySearchTree<number>();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.dfs());
