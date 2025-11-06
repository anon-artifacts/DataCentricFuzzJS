const v0 = {};
const v1 = { z: v0 };
const v2 = { y: v1 };
const v3 = { x: v2 };
var o = { w: v3 };
var a = [,o];
function C() {
}
const v10 = {};
const t9 = C.prototype;
t9.obj = v10;
const v12 = new C();
var c = v12;
function f(a15) {
    function g(a17) {
        return a15 + a17;
    }
    return g;
}
var o = {};
var gc = f(o);
