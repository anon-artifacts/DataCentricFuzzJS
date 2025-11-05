function f0() {
}
var BUGNUMBER = 345879;
var summary = "Crash when calling a function from a generator with less arguments than its arity ";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function* gen() {
        yield isNaN();
    }
    f = gen();
    f.next();
    f0(expect, actual, summary);
}
