const sameFrequency = (string1, string2) => {
  const map = {};
  for (let i = 0; i < string1.length; i++) {
    map[string1[i]] = (map[string1[i]] || 0) + 1;
  }
};
