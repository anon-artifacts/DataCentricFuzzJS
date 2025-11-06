function f0() {
}
var BUGNUMBER = 452189;
var summary = "Don't shadow a readonly or setter proto-property";
var expect = "PASS";
var actual = "FAIL";
function c() {
    this.x = 3;
}
new c();
function f14() {
    actual = expect;
}
Object.prototype.__defineSetter__("x", f14);
new c();
f0(expect, actual, summary);
