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

let flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray.push(...(array[i]));
    } else {
      newArray.push(array[i]);
    }
    
  }
  return newArray;
};

const nestArray = [1, 3, [5, 6], 2, 3];
const flatArray = flatten(nestArray);
console.log(flatArray);