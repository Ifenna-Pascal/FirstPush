const linearSearch = (array, size, key) => {
  if (size === 0) {
    return -1;
  } else if (array[size - 1] === key) {
    return size - 1;
  } else {
    const ans = linearSearch(array, size - 1, key);
    return ans;
  }
};

console.log(linearSearch([2, 4, 5, 6, 9], 5, 9));

const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  for (let i = start; i < end; i++) {
    // const [fist, second] = swap(arr[start], arr[end]);
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

const swap = (start, end) => {
  let temp = start;
  start = end;
  end = temp;
  return [start, end];
};

console.log(swap(2, 4));
console.log(reverseArray([1, 3, 4]));
console.log(Array.from(122));
