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
    if (!this.tail || !this.head) return;
    if (this.head === this.tail) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }

    let pre = this.head;
    let isLast = this.head;

    while (pre.next) {
      isLast = pre;
      pre = pre.next;
    }

    const nodeToReturn = isLast.next;
    isLast.next = null;
    this.tail = isLast;

    this.length--;
    return nodeToReturn;
  }
}

const list = new SinglyLinkedList<string>();
list.push("hi");
list.push("there");
console.log(list.pop());
console.log(list.pop());
console.log(list);
