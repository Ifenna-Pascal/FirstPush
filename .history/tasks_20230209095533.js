const Count = (string) => {
  const map = {};
  for (let i = 0; i < string.length; i++) {
    map[string[i]] = (map[string[i]] || 0) + 1;
  }
  return map;
};

const Anagram = (string1, string2) => {
  const map1 = {};
  const map2 = {};
  if (!(string1.length === string2.length)) {
    return false;
  }
  for (let i of string1) {
    map1[i] = (map1[i] || 0) + 1;
  }
  for (let i of string2) {
    map2[i] = (map2[i] || 0) + 1;
  }
  for (let key in map1) {
    if (!(key in map2)) {
      return false;
    }
  }
  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
  return true;
};

// console.log(Anagram("", ""));

const uniqueCount = (array) => {
  if (array.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));

// console.log(uniqueCount([1, 2, 2, 5, 7, 7, 9, 99]));

const BestTimeToSell = (arrays) => {
  let left = 0;
  let maxProfit = 0;
  let right = 1;
  while (right < arrays.length - 1) {
    if (arrays[right] > arrays[left]) {
      let currentProfit = arrays[right] - arrays[left];
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

// console.log(BestTimeToSell([7, 6, 4, 3, 1]));

const longestSubString = (s) => {
  let i = 0;
  let j = 0;
  let max = 0;
  let set = new Set();
  while (i < s.length) {
    if (set.has(s[i])) {
      set.delete(s[j]);
      j++;
    } else {
      set.add(s[i]);
      max = Math.max(max, i - j + 1);
      i++;
    }
  }
  return max;
};

// console.log(longestSubString("pwwkew"));

// console.log("resilient".includes("resk"));

const TwoInOne = (string, sub) => {
  let i = 0;
  let j = 0;
  let minLength = 0;
  let substring = "";
  while (i < string.length) {
    substring += string[i];
    if (substring.includes(sub)) {
      minLength = Math.min(minLength, substring);
      j++;
    }
    i++;
  }
  return minLength;
};

const SubArray = (array, sum) => {
  let i = 0;
  let j = 0;
  let currentSum = 0;
  while (si < array.length) {
    currentSum += array[i];
    if (currentSum > sum) {
      console.log(currentSum);
      j++;
      currentSum = currentSum - array[j];
    }
    if (currentSum === sum) {
      return currentSum;
    } else {
      i++;
    }
  }
  return currentSum;
};

// console.log(SubArray([1, 4, 20, 3, 10, 5], 33));

const inArray = (array, n, s) => {
  let sum = array[0];
  let start = 0;
  for (let i = 1; i <= n; i++) {
    while (sum > s && start < i - 1) {
      sum = sum - array[start];
      start++;
    }
    if (sum === s) {
      let p = i - 1;
      return [start, p];
    }
    if (i < n) {
      sum += array[i];
    }
  }
};

// console.log(inArray([1, 2, 3, 7, 5], 12));

// const SubArraySum = (array, n, s) => {
//   const hm = new Map();
//   const currentSum = 0;
//   const start = 0;
//   const end = -1;
//   for (let i = 0; i < n; i++) {
//     currentSum += array[i];
//     if (currentSum - s === 0) {
//       start = 0;
//       end = i;
//       break;
//     }
//   }
// };

const LeadersInArray = (arr) => {
  let leader = arr[n - 1];
  console.log(leader);
  for (let i = n - 2; i >= 0; i--) {
    if (leader < arr[i]) {
      leader = arr[i];
      console.log(leader);
    }
  }
};

console.log(LeadersInArray([1, 3, 4, 5, 6, 2, 5]));
