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

  pop() {
    if (!this.tail || !this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.decrementLengthAndResetIfNecessary();
    return newTail;
  }

  shift() {
    if (!this.tail || !this.head) return undefined;

    const oldHead = this.head;
    this.head = this.head.next;

    this.decrementLengthAndResetIfNecessary();

    // isolate old head in memory
    oldHead.next = null;
    return oldHead;
  }

  unshift(val: T) {
    const newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  private decrementLengthAndResetIfNecessary() {
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}

const list = new SinglyLinkedList<string>();
list.push("hi");
list.push("there");
console.log(list.unshift("new"));
console.log(list.unshift("entry"));
console.log(list);
