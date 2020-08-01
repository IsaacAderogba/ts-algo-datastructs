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