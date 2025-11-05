function f0() {
}
var BUGNUMBER = 548671;
var summary = "Don't use a shared-permanent inherited property to implement " + "[].length or (function(){}).length";
f0((BUGNUMBER + ": ") + summary);
var a = [1,2,3];
a.__proto__ = null;
f0("length" in a, true, "length should be own property of array");
f0(Object.hasOwnProperty.call(a, "length"), true, "length should be own property of array");
f0(a.length, 3, "array length should be 3");
var a = [];
var b = [];
b.__proto__ = a;
f0(b.hasOwnProperty("length"), true, "length should be own property of array");
b.length = 42;
f0(b.length, 42, "should have mutated b's (own) length");
f0(a.length, 0, "should not have mutated a's (own) length");
if (typeof f0 === "function") {
    f0(true, true);
}
f0("All tests passed!");
