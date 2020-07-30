/**
 * Abstract LIFO data structure
 * - Can use a linked list to create a stack
 * - Used in undo/redo functionality, routing in the history object, other algos
 * - Can make with a SinglyLinkedLIst
 * push/pop, returns length, just like a linked list
 */

class Node<T> {
  constructor(public value: T, public next: Node<T> | null) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  first: Node<T> | null;
  last: Node<T> | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
