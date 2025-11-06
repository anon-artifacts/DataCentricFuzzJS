function f0() {
}
var BUGNUMBER = 420087;
var summary = "Do not assert:  PCVCAP_MAKE(sprop->shape, 0, 0) == entry->vcap";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var dict;
    for (let i17 = 0; i17 < 2; i17++) {
        dict = { p: 1, q: 1, p: 1 };
    }
    f0(expect, actual, summary);
}
