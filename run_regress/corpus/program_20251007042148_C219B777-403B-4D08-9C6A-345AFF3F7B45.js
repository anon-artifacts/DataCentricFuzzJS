function f0() {
}
var BUGNUMBER = 477733;
var summary = "TM: Do not assert: !(fp->flags & JSFRAME_POP_BLOCKS)";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function g() {
        [];
    }
    try {
        d.d.d;
    } catch(e19) {
        function f20() {
        }
        void f20;
    }
    for (const v26 in [1,2,3]) {
        g();
    }
    f0(expect, actual, summary);
}
