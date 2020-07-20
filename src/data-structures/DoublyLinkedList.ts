export {};

class Node<T> {
  val: T;
  next: Node<T> | null = null;
  prev: Node<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
