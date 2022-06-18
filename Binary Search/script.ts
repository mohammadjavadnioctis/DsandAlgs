console.log("linked");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;
  let middle: number;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, 5));
