const { first, last, chunk } = require("./EX2");

// first
test("first function returns the first n elements of an array", () => {
  const array = [1, 2, 3, 4, 5];
  const result = first(array, 3);
  expect(result).toEqual([1, 2, 3]);
});


// last
test("last function returns the last n elements of an array", () => {
  const array = [1, 2, 3, 4, 5];
  const result = last(array, 3);
  expect(result).toEqual([3, 4, 5]);
});

// test
// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString()); console.log(myColor.join());
// console.log(myColor.join(''));

test(' the concatenation of all the elements of an array of Strings. 1-toString() ',()=>{
    myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.toString());

    expect(myColor.toString()).toBe("RedGreenWhiteBlack");

})

test(' the concatenation of all the elements of an array of Strings. 2-join() ',()=>{
    myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.join());

    expect(myColor.join()).toBe("RedGreenWhiteBlack");

})

test(' the concatenation of all the elements of an array of Strings. 3-join("") ',()=>{
    myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.join(''));

    expect(myColor.join('')).toBe("RedGreenWhiteBlack");

})


// chunk
test("chunk function returns an array of arrays of size n", () => {
  const array = [1, 2, 3, 4, 5];
  const result = chunk(array, 2);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});


