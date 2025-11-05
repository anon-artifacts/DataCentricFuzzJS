function f0() {
}
function foo() {
    var x = 0;
    x = 1;
    var z = x & 1;
    f0(z);
    x = 0;
    x |= 1;
    x &= 1;
    f0(x);
}
foo();
function f12() {
    var f = 5;
    x = f * f++;
    f0("x = " + x);
}
f12();
const v24 = new Object();
var o = v24;
function func(a27) {
    a27 = null;
    a27.blah2 = null;
    a27.blah = null;
}
try { func(o); } catch (e) {}
