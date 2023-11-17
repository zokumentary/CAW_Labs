
const { mean } = require('./notation'); 

test('calculates the mean of an array of numbers', () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [10, 20, 30, 40, 50];


  const result1 = mean(array1);
  const result2 = mean(array2);

  expect(result1).toBe(3);
  expect(result2).toBe(30);
});
