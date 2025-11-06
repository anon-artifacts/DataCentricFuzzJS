function f0() {
}
var BUGNUMBER = "58946";
var stat = "Testing a return statement inside a catch statement inside a function";
test();
function test() {
    f0(BUGNUMBER);
    f0(stat);
    expect = "PASS";
    function f() {
        try {
            throw "PASS";
        } catch(e14) {
            return e14;
        }
    }
    actual = f();
    f0(expect, actual, stat);
}
