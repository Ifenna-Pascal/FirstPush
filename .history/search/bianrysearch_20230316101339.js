function binarySearch(array, num, start, end) {
  if (start > end) return;
  const mid = Math.floor((start + end) / 2);
  if (array[mid] > num) {
    binarySearch(array, num, start, mid - 1);
  }
}
