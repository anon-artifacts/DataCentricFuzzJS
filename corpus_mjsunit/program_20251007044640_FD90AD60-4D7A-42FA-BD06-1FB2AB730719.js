function f0() {
}
var BUGNUMBER = 458838;
var summary = "TM: do not fall off trace when nested function accesses var of outer function";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f() {
        var a = 1;
        function g() {
            var b = 0;
            for (let i21 = 0; i21 < 10; ++i21) {
                b += a;
            }
            return b;
        }
        return g();
    }
    f0(expect = 10, actual = f(), summary + ": return value 10");
}
