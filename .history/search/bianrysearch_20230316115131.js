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
  const mapping = {};
  for (let i in array) {
    mapping[i] = array[i];
  }
  for (let i in array) {
    mapping[i] = array[i];
  }
};

const mapping = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: null,
  6: 6,
};

console.log(missingNUmber(arr));
[1, 2, 3, 4, 6];
