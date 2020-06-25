/**
 * Big O is a way to formalize fuzzy counting. Visualize over a huge timespan
 * to really identify what matters when simplifying the expression
 *
 * 1. Constants do not matter
 * - 0(2n) => 0(n)
 * - 0(500) => 0(1)
 * - 0(13n^2) => 0(n^2)
 * 2. Smaller terms also do not matter
 * - 0(n^2 + 5n + 8) => 0(n^2)
 *
 * Rules of thumb that can help:
 * - Arithmetic operations are constant
 * - Variable assignment is constant
 * - Accessing elements in an array (by index) or object (by key) is constant
 * - In a loop, the complexity is the length of the loop, times the complexity
 *   of whatever happens inside the loop
 *
 */

/**
 * Can also use big 0 to analyze space complexity
 * - Technically, auxiliary space complexity
 * - Primitive variables are constant space
 * - Strings require 0(n) space
 * - Reference types are generally 0(n) as well
 */

/**
 * 0(1), 0(n) and (n^2) are relatively straightforward
 * Log is the inverse of exponentiation
 * 
 * log2(8) = 3
 * Question is "2" to what "power" equals 8?
 * 2^3 = 8
 * 
 * Since we care about big picture, we'll omit the 2.
 * 
 * Roughly:
 * The binary logarithm of a number roughly measures the number of times
 * you can divide that number by 2 before you get a value that's less
 * than or equal to one
 * 
 * Keep on dividing until you get to 1. Number of operations is logarithm
 * 
 * 0(1)
 * 0(logn)
 * 0(n)
 * 0(nlogn)
 * 0(n2)
 */
export {};
