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

console.log(binarySearch());
