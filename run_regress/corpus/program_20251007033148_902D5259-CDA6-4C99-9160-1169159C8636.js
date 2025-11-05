function f0() {
}
var BUGNUMBER = 358594;
var summary = "Do not crash on uneval(this).";
var actual = "";
var expect = "";
try { test(); } catch (e) {}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
    }
    f = f14;
    f.hhhhhhhhh = this;
    Object.defineProperty(this, "m", { set: f, enumerable: true, configurable: true });
    try { uneval(this); } catch (e) {}
    try { f0(expect, actual, summary); } catch (e) {}
}
