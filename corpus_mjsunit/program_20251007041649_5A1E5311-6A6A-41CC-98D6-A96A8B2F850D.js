function f0() {
}
var BUGNUMBER = 503860;
var summary = "Don't shadow a readonly or setter proto-property";
var expect = "PASS";
var actual = "FAIL";
var a = { y: 1 };
function B() {
}
function setx(a15) {
    actual = expect;
}
B.prototype.__defineSetter__("x", setx);
const v18 = new B();
var b = v18;
b.y = 1;
var arr = [a,b];
for (const v23 of arr) {
    v23.x = 2;
}
f0(expect, actual, summary);
