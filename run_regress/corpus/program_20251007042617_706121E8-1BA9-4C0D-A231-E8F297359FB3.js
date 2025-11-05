function f0() {
}
var BUGNUMBER = 507053;
var summary = "TM: invalid results with setting a closure variable in a loop";
var actual = "";
var expect = "2,4,8,16,32,2,4,8,16,32,2,4,8,16,32,2,4,8,16,32,2,4,8,16,32,";
start_test();
function f11() {
    var p = 1;
    function g() {
        for (let i16 = 0; i16 < 5; ++i16) {
            actual += (p = p * 2) + ",";
        }
    }
    g();
}
var f = f11;
for (let i29 = 0; i29 < 5; ++i29) {
    f();
}
finish_test();
function start_test() {
    f0(BUGNUMBER);
    f0(summary);
}
function finish_test() {
    f0(expect, actual, summary);
}
