var BUGNUMBER = 677820;
var summary = "String.prototype.match must define matches on the returned array, not set " + "them";
print((BUGNUMBER + ": ") + summary);
var called = false;
function setterFunction(a14) {
    called = true;
}
function getterFunction(a17) {
    return "getter";
}
const v20 = Array.prototype;
Object.defineProperty(v20, 1, { get: getterFunction, set: setterFunction });
var matches = ("abcdef").match(/./g);
matches.length;
matches[0];
matches[1];
matches[2];
matches[3];
matches[4];
matches[5];
var desc = Object.getOwnPropertyDescriptor(Array.prototype, 1);
desc.get;
getterFunction();
desc.set;
setterFunction();
desc.enumerable;
desc.configurable;
([])[1];
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
