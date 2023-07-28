function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let j = array[i - 1];
    while (j > 0 && j > current) {
      array[j + 1] = array[j];
      j--;
    }
    current = array[j];
  }
}
