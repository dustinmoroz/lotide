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


const without = function(array, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (itemsToRemove.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["a", "b", "c"], ["b"]));
console.log(without([true, false, true], [true]));