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

// const missingNUmber = (array) => {
//   const mapping = {};
//   for (let i = 1; i <= array.length; i++) {
//     mapping[array[i]] = 0;
//   }
//   for (let i = 1; i <= array.length; i++) {

//   }
//   console.log(mapping);
// };

// const mapping = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: null,
//   6: 6,
// };

// console.log(missingNUmber(arr));
// [1, 2, 3, 4, 6];

// Javascript code to implement the approach

// Function to find the missing number
function findMissing(arr, N) {
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }

  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
  }

  let ans = 0;
  for (i = 0; i <= N; i++) {
    if (temp[i] == 0) ans = i + 1;
  }
  console.log(ans);
}

// Driver code
let arrs = [7, 3, 4, 5, 5, 6, 2];
let n = arrs.length;

// Function call
// console.log(findMissing(arrs, n));

const firstRepeatingElement = (array) => {
  let map = {};
  for (let i = 0; i < n; i++) {
    if (map[array[i]] !== undefined) {
      map[array[i]] += 1;
    } else {
      map[array[i]] = 1;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] > 1) {
      return array[i];
    }
  }
};
// console.log(firstRepeatingElement(arrs));

const repeating = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      console.log(arr[i]);
      break;
    }
  }
};

console.log(repeating(arrs));
