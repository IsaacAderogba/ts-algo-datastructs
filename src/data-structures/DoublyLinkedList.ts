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

    if (this.isListEmpty) {
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
    if (this.isListEmpty) return undefined;

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
    if (this.isListEmpty) return undefined;

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

  unshift(val: T) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.incrementLength;
    return this;
  }

  get(index: number) {
    if (this.isListEmpty) return null;
    if (index < 0 || index >= this.length) return null;

    let nodeToReturn: Node<T> | null = null;
    if (index > this.length / 2) {
      nodeToReturn = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        if (nodeToReturn) {
          nodeToReturn = nodeToReturn.prev;
        }
      }
    } else {
      nodeToReturn = this.head;
      for (let i = 0; i < index; i++) {
        if (nodeToReturn) {
          nodeToReturn = nodeToReturn.next;
        }
      }
    }

    return nodeToReturn;
  }

  set(index: number, value: T) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
    }
    return !!foundNode;
  }

  insert(index: number, value: T) {
    if (index === 0) !!this.unshift(value);
    if (index === this.length) !!this.push(value);

    const newNode = new Node(value);
    const foundNode = this.get(index);

    if (foundNode) {
      newNode.next = foundNode;
      newNode.prev = foundNode.prev;
      if (foundNode.prev) {
        foundNode.prev.next = newNode;
        foundNode.prev = newNode;
      }
    }

    this.incrementLength();
    return !!foundNode;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const nodeToRemove = this.get(index);

    if (nodeToRemove) {
      if (nodeToRemove.next) {
        nodeToRemove.next.prev = nodeToRemove.prev;
      }
      if (nodeToRemove.prev) {
        nodeToRemove.prev.next = nodeToRemove.next;
      }
      nodeToRemove.next = null;
      nodeToRemove.prev = null;
    }

    this.decrementLength();
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return nodeToRemove;
  }

  private get isListEmpty() {
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
list.push(4);
list.push(5);
console.log(list.remove(1));
// console.log(list.pop());
// console.log(list);

/**
 * Insertion is constant time 0(1)
 * Removal for double is always constant 0(1)
 * Searching is 0(N), even though it's technically 0(N/2) because of divide and conquer approach
 * Access is 0(N)
 */
