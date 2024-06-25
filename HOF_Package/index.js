
// Function 1: Sum of all elements in an array
function sum(arr) {
    return arr.reduce((total, current) => total + current, 0);
  }
  
  // Function 2: Remove duplicates from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Function 3: Filter out even numbers from an array
  function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // Function 4: Check if all elements in an array satisfy a condition
  function allSatisfy(arr, condition) {
    return arr.every(condition);
  }
  
  // Function 5: Find the maximum number in an array
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // Function 6: Convert array elements to uppercase
  function toUpperCase(arr) {
    return arr.map(item => item.toUpperCase());
  }
  
  // Function 7: Flatten a nested array
  function flatten(arr) {
    return arr.flat();
  }
  
  // Function 8: Rotate elements of an array to the left by n positions
  function rotateLeft(arr, n) {
    const index = n % arr.length;
    return [...arr.slice(index), ...arr.slice(0, index)];
  }
  
  // Function 9: Get unique elements from multiple arrays
  function uniqueElements(...arrays) {
    return [...new Set(arrays.flat())];
  }
  
  // Function 10: Partition an array into chunks of a specified size
  function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  }
  
  module.exports = {
    sum,
    removeDuplicates,
    filterEvenNumbers,
    allSatisfy,
    findMax,
    toUpperCase,
    flatten,
    rotateLeft,
    uniqueElements,
    chunk
  };
  