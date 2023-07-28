const sameFrequency = (string1, string2) => {
  const map = {};
  for (let i = 0; i < string1.length; i++) {
    map[string1[i]] = (map[string1[i]] || 0) + 1;
  }
  for (let j of string2) {
    if (string2[j] in map.keys && map[string2[j]]) {
    }
  }
  return map;
};
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

const averagePair = (_arr, _target) => {
  let i = 0;
  for (let j = 1; j < _arr.length; j++) {
    if ((_arr[i] + _arr[j]) / 2 === _target) {
      return true;
    } else {
      i++;
    }
  }
  return false;
};

console.log(
averagePair([1, 2, 3], 2.5);

);
// console.log(sameFrequency("ifenna"));
// console.log(areThereDuplicates(1, 2, 3, 4, 9));
