function f0() {
}
var BUGNUMBER = 450833;
var summary = "TM: Multiple trees per entry point";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = 100;
    function f(a16) {
        for (let i18 = 0; i18 < 20; ++i18) {
            for (let i25 = 0; i25 < 100; i25 += a16) {
            }
        }
        return n;
    }
    let v32;
    try { v32 = f(1); } catch (e) {}
    actual = v32;
    f0(v32);
    f0(expect, actual, summary);
    let v36;
    try { v36 = f(0.5); } catch (e) {}
    actual = v36;
    f0(v36);
    f0(expect, actual, summary);
}
