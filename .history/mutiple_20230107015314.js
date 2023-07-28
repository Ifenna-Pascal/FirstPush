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
  let j = 1;
  while (j < arrays.length - 1) {
    if (arrays[j] != arrays[j - 1]) {
      arrays[i] = arrays[j];
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i;
};

// console.log(TwoSum([2, 3, 4, 8], 12));
// console.log(moveZeros([0, 9, 1, 0, 12]));
console.log(removeDuplicates([1, 1, 2, 2, 3]));
