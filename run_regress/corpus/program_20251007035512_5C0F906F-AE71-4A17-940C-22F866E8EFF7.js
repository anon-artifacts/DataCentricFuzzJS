function f0() {
}
var BUGNUMBER = 469625;
var summary = "TM: Array prototype and expression closures";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "TypeError: [].__proto__ is not a function";
    function f15() {
        return 3;
    }
    const t14 = Array.prototype;
    t14.__proto__ = f15;
    try {
        ([]).__proto__();
    } catch(e21) {
        const v23 = e21 + "";
        actual = v23;
        f0(v23);
    }
    f0(expect, actual, summary);
}
