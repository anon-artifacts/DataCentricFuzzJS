function f0() {
}
var BUGNUMBER = 295666;
var summary = "Check JS only recursion stack overflow";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
try {
    const v12 = parseInt.call;
    throw { toString: v12 };
} catch(e14) {
}
f0(expect, actual, summary);
