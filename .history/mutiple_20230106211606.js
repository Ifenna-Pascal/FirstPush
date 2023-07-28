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
    }
  }
}

console.log(TwoSum([2, 3, 4, 8], 5));
