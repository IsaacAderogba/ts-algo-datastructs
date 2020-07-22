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

  shift() {
    if (this.isListEmpty()) return undefined;

    let oldHead: Node<T> | null = null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.head) {
      oldHead = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      }
      oldHead.next = null;
    }

    this.decrementLength();
    return oldHead;
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
console.log(list.shift());
console.log(list.shift());
// console.log(list.pop());
// console.log(list);
