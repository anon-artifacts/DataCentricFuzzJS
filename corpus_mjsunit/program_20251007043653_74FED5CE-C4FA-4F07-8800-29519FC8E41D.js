var BUGNUMBER = 866700;
var summary = "Assertion redefining non-writable length to a non-numeric value";
print((BUGNUMBER + ": ") + summary);
var count = 0;
function f11() {
    count++;
    return 0;
}
var convertible = { valueOf: f11 };
var arr = [];
Object.defineProperty(arr, "length", { value: 0, writable: false });
Object.defineProperty(arr, "length", { value: convertible });
Object.defineProperty(arr, "length", { value: convertible });
arr.length;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
