function f0() {
}
var BUGNUMBER = 562446;
var summary = "ES5: Array.prototype.toLocaleString";
f0((BUGNUMBER + ": ") + summary);
var o;
function f13() {
    return "baz";
}
const v15 = { toLocaleString: f13 };
o = { length: 2, 0: 7, 1: v15 };
Array.prototype.toLocaleString.call(o);
o = {};
Array.prototype.toLocaleString.call(o);
var log = "";
function f29() {
    log += "L";
    return 2;
}
const v32 = { valueOf: f29 };
arr = { length: v32, 0: "x", 1: "z" };
Array.prototype.toLocaleString.call(arr);
f0(true, true);
f0("All tests passed!");
