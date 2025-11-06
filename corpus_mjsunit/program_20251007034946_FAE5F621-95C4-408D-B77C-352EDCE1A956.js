var gTestfile = "getPrototypeOf-array.js";
var BUGNUMBER = 769041;
var summary = "The [[Prototype]] of an object whose prototype chain contains an array " + "isn't that array's [[Prototype]]";
print((BUGNUMBER + ": ") + summary);
var arr = [];
Array.isArray(arr);
var objWithArrPrototype = Object.create(arr);
!Array.isArray(objWithArrPrototype);
Object.getPrototypeOf(objWithArrPrototype);
var objWithArrGrandPrototype = Object.create(objWithArrPrototype);
!Array.isArray(objWithArrGrandPrototype);
Object.getPrototypeOf(objWithArrGrandPrototype);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
