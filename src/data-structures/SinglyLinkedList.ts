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
    return current;
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

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    let currNode = this.head;

    while (index--) {
      if (currNode) currNode = currNode.next;
    }

    return currNode;
  }

  set(index: number, value: T) {
    const nodeToSet = this.get(index);
    if (!nodeToSet) return false;

    nodeToSet.val = value;
    return true;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const preNode = this.get(index - 1);
    const postNode = preNode?.next;

    if (preNode && postNode) {
      newNode.next = postNode;
      preNode.next = newNode;
    }

    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // take the previous one's next and set to deleted ones next
    const preNode = this.get(index - 1);
    const nodeToRemove = preNode?.next;

    if (preNode && nodeToRemove) {
      preNode.next = nodeToRemove.next;
      nodeToRemove.next = null;
      this.decrementLengthAndResetIfNecessary();
    }

    return nodeToRemove;
  }

  reverse() {
    let currentNode = this.head;
    this.tail = currentNode;

    // 27
    let nextNode = currentNode?.next;

    while (nextNode) {
      // temp node is 32
      const tempNode = nextNode.next;

      // 27 is pointing to 13
      nextNode.next = currentNode;

      // current node is now 27
      currentNode = nextNode;

      // 32
      if (!tempNode) this.head = nextNode;
      nextNode = tempNode;
    }

    if (this.tail) this.tail.next = null;
    return list;
  }

  private decrementLengthAndResetIfNecessary() {
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}

const list = new SinglyLinkedList<number>();
list.push(13);
list.push(27);
list.push(32);
list.push(71);
console.log(list.reverse());
