/**
 * Queue is similar to a Stack
 * - Just a FIFO data structure
 * - Seems like a next and prev would be necessary on the Node class
 * push, shift <- This is better
 * unshift, pop
 */

export {};

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {
    this.value = value;
  }
}

class Queue<T> {
  first: Node<T> | null;
  last: Node<T> | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to end
  enqueue(value: T) {
    const newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
      this.last = this.first;
    } else if (this.last) {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // remove from beginning
  dequeue() {
    if (!this.size) return;

    const nodeToRemove = this.first;
    if (nodeToRemove) {
      this.first = nodeToRemove.next;
      nodeToRemove.next = null;
    }

    if (!--this.size) {
      this.first = null;
      this.last = null;
    }

    return nodeToRemove;
  }
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
