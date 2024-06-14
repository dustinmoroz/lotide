const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  if (array1 !== array2) {
    return false;
  }
};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);