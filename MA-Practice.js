// Given an array of strings, write a function
// that returns an array of objects representing each unique string and its frequency in the original array.
const strings = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];
// Output: [{ string: 'apple', frequency: 2 }, { string: 'banana', frequency: 1 }, { string: 'cherry', frequency: 3 }]
const getFrequencyArray = (strings) => {
  const newArr = [];
  const obj = strings.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});

  for (let key in obj) {
    newArr.push({ string: key, frequency: obj[key] });
  }
  return newArr;
};
console.log(getFrequencyArray(strings));
