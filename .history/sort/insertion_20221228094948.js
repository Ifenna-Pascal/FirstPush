function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    current = array[j];
  }
  return array;
}

console.log(InsertionSort([1, 3, 6, 3, 8, 2]));
