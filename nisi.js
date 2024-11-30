const randomValues = [1, 3, 7, 2, 5];

const maxValue = randomValues.reduce((max, currentValue) => {
  return currentValue > max ? currentValue : max;
}, randomValues[0]);

console.log(maxValue); // Output: 7
