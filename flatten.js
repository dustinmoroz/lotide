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


//following function will takes an array and flattens any array elements within it.

let flatten = function(array) {
  let newArray = []; //new variable definied to store the elements in
  for (let i = 0; i < array.length; i++) { //loops through the array
    if (Array.isArray(array[i])) { //if the array elements are arrays
      newArray.push(...(array[i])); //this will push each element (noted by ...) to the array variable
    } else { //otherwise
      newArray.push(array[i]); //this will push the element to the new array
    }
    
  }
  return newArray; //logs the new array
};

const nestArray = [1, 3, [5, 6], 2, 3]; //new variable
const flatArray = flatten(nestArray); //new variable that runs the above variable through the function "flatten"
console.log(flatArray); //logging of that variable