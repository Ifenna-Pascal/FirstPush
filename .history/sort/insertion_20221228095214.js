function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    // current = array[j];
    array[j + 1] = current;
  }
  return array;
}

console.log(InsertionSort([2, 3, 6, 7, 1, 3, 8, 9]));
