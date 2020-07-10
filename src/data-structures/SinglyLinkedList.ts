/**
 * Head
 * tail
 * length
 *
 * Node points to the next
 *
 * Use for insertion and deletion
 */

class Node<T> {
  val: T;
  next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList<string>();
list.push("hi");
