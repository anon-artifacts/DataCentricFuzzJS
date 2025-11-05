function loop(a1, a2) {
    for (let i4 = 0; i4 < 9; i4++) {
        a1();
    }
}
function C(a12) {
    var x = a12;
    function f() {
        return x;
    }
    if (a12) {
        void (f + "a!");
    }
    return f;
}
var obj = {};
loop(C.call(obj, false), false);
function f24() {
    loop(this, true);
    return "hah";
}
const t21 = Function.prototype;
t21.toString = f24;
C.call(obj, true);
