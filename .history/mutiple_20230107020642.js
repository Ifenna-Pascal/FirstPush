// function TwoSum(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     if (arr[start] + arr[end] === target) {
//       return {
//         isTrue: true,
//         res: `${arr[start]} , ${arr[end]}`,
//       };
//     } else if (arr[start] + arr[end] < target) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   return false;
// }

function TwoSum(array, target) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    let res = target - array[i];
    if (map[res]) {
      return {
        isTrue: true,
        res: `${map[res]}, ${array[i]}`,
      };
    } else {
      map[array[i]] = array[i];
    }
  }
  return false;
}

function moveZeros(arrays) {
  let l = 0;
  let r = 0;
  while (r < arrays.length) {
    if (arrays[r] === 0) {
      r++;
    } else {
      let temp = arrays[l];
      arrays[l] = arrays[r];
      arrays[r] = temp;
      l++;
      r++;
    }
  }
  return arrays;
}

const removeDuplicates = (arrays) => {
  let i = 1;
  for (let j = 1; j < arrays.length; j++) {
    if (arrays[j] !== arrays[j - 1]) {
      arrays[i] = arrays[j];
      i++;
    }
  }

  return i;
};

const Squares = (array) => {
  let i = 0;
  let j = 0;
  for (let j = 0; j < array.length; j++) {
    array[i] = array[j] ^ 2;
    i++;
  }
  return array;
};
