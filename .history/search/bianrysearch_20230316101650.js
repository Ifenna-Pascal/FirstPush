function binarySearch(array, num, start, end) {
  if (start > end) return;
  const mid = Math.floor((start + end) / 2);
  if (array[mid] === num) {
    return mid;
  } else if (array[mid] > num) {
    binarySearch(array, num, start, mid - 1);
  } else {
    binarySearch(array, num, mid + 1, end);
  }
}

const arr = [1, 3, 5, 7, 8, 9];
console.log(binarySearch(arr, 5, 0, arr.length - 1));
