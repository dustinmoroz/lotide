const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log("🔴🔴🔴 Assertion Failed: " + actual + " !== " + expected);
  }

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3.14, "car");
assertEqual("four", 4);
assertEqual("Dustin", "dustin");
assertEqual("dustin", "dustin");