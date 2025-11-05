function f0() {
}
var BUGNUMBER = 479487;
var summary = "js_Array_dense_setelem can call arbitrary JS code";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const t8 = Array.prototype;
    t8[1] = 2;
    function f18() {
        f0("Hello from arbitrary JS");
    }
    Array.prototype.__defineSetter__(32, f18);
    function f24() {
        return 11;
    }
    Array.prototype.__defineGetter__(32, f24);
    function f() {
        var a = [];
        for (let i32 = 0; i32 != 10; ++i32) {
            a[1 << i32] = 9999;
        }
        return a;
    }
    f();
    f0(expect, actual, summary);
}
