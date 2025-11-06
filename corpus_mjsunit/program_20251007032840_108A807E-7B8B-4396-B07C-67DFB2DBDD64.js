var BUGNUMBER = 604971;
var summary = "array.sort compare-function gets incorrect this";
print((BUGNUMBER + ": ") + summary);
function f9() {
    'use strict';
}
([1,2,3]).sort(f9);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
