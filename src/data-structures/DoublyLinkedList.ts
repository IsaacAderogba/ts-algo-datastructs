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

  push(value: T) {
    const newNode = new Node(value);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else if(this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();

console.log(list.push(1));
console.log(list.push(2));