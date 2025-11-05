function f0() {
}
var BUGNUMBER = 452491;
var summary = "Do not crash with JIT: with new";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 5; ++i15) {
        function f21(a22) {
            return a22;
        }
        const v23 = new f21();
        v23.a;
    }
    f0(expect, actual, summary);
}
