// function to determine nth rarerest number

const Rarerest = (array, n) => {
  if (n > array.length) return "N is longer than array lenght";
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] === undefined) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }

  const keys = Object.keys(map).sort((a, b) => map[a] - map[b]);
  return [map[keys[n + 1]], map];
};

const maxSubArray = (array, num) => {
  if (array.length < num) {
    return null;
  }
  //   let temp = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  for (let j = num; j < array.length; j++) {
    let temp = maxSum - array[j - num] + array[j];
    maxSum = Math.max(maxSum, temp);
  }

  return maxSum;
};

console.log(maxSubArray([3, -2, 7, -4, 1, -1, 4, -2, 1], 5));
