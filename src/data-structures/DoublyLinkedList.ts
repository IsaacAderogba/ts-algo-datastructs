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

    if (this.isListEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.incrementLength();
    return this;
  }

  pop() {
    if (this.isListEmpty()) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (poppedNode) {
      this.tail = poppedNode.prev;
      poppedNode.prev = null;
      if (this.tail) this.tail.next = null;
    }

    this.decrementLength();
    return poppedNode;
  }

  private isListEmpty() {
    if (!this.head && !this.tail) return true;
    return false;
  }

  private incrementLength() {
    this.length++;
  }

  private decrementLength() {
    this.length--;
  }
}

const list = new DoublyLinkedList<number>();

list.push(1);
list.push(2);
list.push(3);
console.log(list.pop());
// console.log(list.pop());
// console.log(list);
