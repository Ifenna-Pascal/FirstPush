function binarySearch(array, num, start, end) {
  if (start > end) return false;
  const mid = Math.floor((start + end) / 2);
  if (array[mid] === num) {
    return mid;
  }
  if (array[mid] > num) {
    return binarySearch(array, num, start, mid - 1);
  } else {
    return binarySearch(array, num, mid + 1, end);
  }
}

// console.log(binarySearch(arr, 9, 0, arr.length - 1));

function largestThreeElements(array) {
  console.log(array);
  return Math.max(...array);
}
const arr = [1, 3, 5, 7, 8, 9];

console.log(largestThreeElements(arr));
