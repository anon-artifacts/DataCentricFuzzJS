function f0() {
}
var BUGNUMBER = 245308;
var summary = "Don't Crash with nest try catch";
var actual = "Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function foo(a12) {
    try {
    } catch(e13) {
        try {
        } catch(e14) {
        }
    }
}
foo("foo");
f0(expect, actual = "No Crash", summary);
