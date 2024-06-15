

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} and ${array2} are equal.`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} and ${array2} are not equal.`);
  }
};

const middle = function(array) {
  if (array.length < 2) { //if an array only has two elements
    return []; //returns an empty array
  }

  const middleHalf = Math.floor(array.length / 2); //a new variable that rounds up to the nearest integer the length of the array / 2

  if (array.length % 2 !== 0) { //if the array length is an odd number of elements
    return [array[middleHalf]]; //return the middle of the array
  }

  if (array.length % 2 === 0) { // if the array length is an even number of elements
    return [(array[middleHalf] - 1), (array[middleHalf] + 1)];
  }

};


const odd = [1, 3, [5, 6], 2, 3]; //new variable re: odd
const middleArrayOdd = middle(odd); //new variable that runs the above variable through the function "flatten"
console.log(middleArrayOdd); //logging of that variable

const even = ([1, 2, 3, 4, 5, 6]); //new variable re: even
const middleArrayEven = middle(even); //new variable that runs the above variable through the function "flatten"
console.log(middleArrayEven); //logging of that variable