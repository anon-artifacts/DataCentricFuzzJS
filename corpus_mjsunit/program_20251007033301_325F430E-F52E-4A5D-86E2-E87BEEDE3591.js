function f0() {
}
var BUGNUMBER = "364603";
var summary = "The value placed in a filtered array for an element is the " + " element's value before the callback is run, not after";
var actual;
var expect;
f0(BUGNUMBER);
f0(summary);
var failed = false;
function mutate(a16, a17, a18) {
    a18[a17] = "mutated";
    return true;
}
function assertEqual(a22, a23, a24) {
    if (a22 !== a23) {
        throw a24;
    }
}
try {
    var a = [1,2];
    var m = a.filter(mutate);
    a[0];
    a[1];
    m[0];
    m[1];
} catch(e44) {
    failed = e44;
}
f0(expect = false, actual = failed, summary);
