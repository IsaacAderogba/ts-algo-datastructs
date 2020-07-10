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


