function f0() {
}
var BUGNUMBER = 457065;
var summary = "Do not assert: !fp->callee || fp->thisp == fp->argv[-1].toObjectOrNull()";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        function f15() {
            for (let i17 = 0; i17 < 3; ++i17) {
            }
        }
        new f15();
    }
    f14();
    f0(expect, actual, summary);
}
