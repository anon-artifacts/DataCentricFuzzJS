function f0() {
}
var BUGNUMBER = 340526;
var summary = "Iterators: cross-referenced objects with close handler can " + "delay close handler execution";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
try {
    var iter = Iterator({});
    iter.foo = "bar";
    for (const v18 in iter) {
    }
} catch(e19) {
}
f0(expect, actual, summary);
