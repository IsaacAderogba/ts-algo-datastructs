/**
 * Heaps are a category of Trees with just specific rules
 * MaxBinaryHeap
 * MinBinaryHeap
 *
 * Heaps are important for implementing Priority Queues, allowing us to assign an importance level
 * Heaps are also often used when it comes to graph traversal (as opposed to tree traversal)
 * Can use a list to store heaps
 *
 * For any index of an array n...
 * The left child is stored at 2n+1
 * The right child is at 2n+2
 *
 * For any child node at index n...
 * Its parent is at index (n-1)/2 - FLOORED
 */

export {};
class MaxBinaryHeap<T> {
  values: T[] = [];

  insert(value: T) {
    this.values.push(value);
    this.bubbleUp();
  }

  private bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx]; // this doesn't need to change

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break; // don't forget about break

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap<number>();

maxBinaryHeap.insert(25);
maxBinaryHeap.insert(40);
maxBinaryHeap.insert(11);
maxBinaryHeap.insert(30);
maxBinaryHeap.insert(100);
maxBinaryHeap.insert(70);
console.log(maxBinaryHeap);
