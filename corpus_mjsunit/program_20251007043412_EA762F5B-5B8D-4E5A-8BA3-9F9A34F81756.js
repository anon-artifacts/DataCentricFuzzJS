function f0() {
}
var BUGNUMBER = 452498;
var summary = "TM: upvar2 regression tests";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function m() {
        function a() {
        }
        function b() {
            a();
        }
        function f18() {
            b();
        }
        this.c = f18;
    }
    const v21 = new m();
    v21.c();
    f0(expect, actual, summary);
}
