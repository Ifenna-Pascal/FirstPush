function TwoSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] === target) {
      return true;
    } else if (arr[start] + arr[end] < target) {
      start++;
    } else {
      end--;
    }
  }
}
