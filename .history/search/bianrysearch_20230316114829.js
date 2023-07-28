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
  array.sort((a, b) => a - b);
  array.reverse();
  return [array[0], array[1], array[2]];
}
const arr = [1, 2, 3, 4, 6];

// console.log(largestThreeElements(arr));

const missingNUmber = (array) => {
  for (let i = 1; i <= array.length; i++) {
    if (i !== array[i]) return i;
  }
};

const mapping = {};

console.log(missingNUmber(arr));
[1, 2, 3, 4, 6];
