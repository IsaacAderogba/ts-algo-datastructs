/**
 * Abstract LIFO data structure
 * - Can use a linked list to create a stack
 * - Used in undo/redo functionality, routing in the history object, other algos
 * - Can make with a SinglyLinkedLIst
 * push/pop, returns length, just like a linked list
 */

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {
    this.value = value;
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

  push(value: T) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.size) return;

    const poppedNode = this.first;

    if (this.first && poppedNode) {
      this.first = poppedNode.next;
      poppedNode.next = null;
    }

    this.size--;

    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }

    return poppedNode;
  }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
