function f0() {
}
var BUGNUMBER = 366468;
var summary = "Set property without setter";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        function o() {
        }
        const v16 = {
            get foo() {
            },
        };
        o.prototype = v16;
        const v17 = new o();
        obj = v17;
        obj.foo = 2;
    } catch(e21) {
    }
    f0(expect, actual, summary);
}
