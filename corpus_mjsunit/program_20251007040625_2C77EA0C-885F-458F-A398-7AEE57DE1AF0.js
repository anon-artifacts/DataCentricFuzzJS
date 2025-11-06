console.log("This test ensures that we will call a custom setter when the setter is in the prototype chain");
var testObject = { __proto__: RegExp };
testObject.input = "testInput";
testObject.input;
RegExp.input;
