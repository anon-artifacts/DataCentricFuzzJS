function func1() {
    return "123";
}
function func2(a3, a4, a5, a6, a7) {
    return "123";
}
var imp = { func1: func1, func2: func2 };
function FFI1(a12, a13) {
    'use asm';
    var func1 = a13.func1;
    var func2 = a13.func2;
    function g() {
        return func1() | 0;
    }
    function h() {
        return func2() | 0;
    }
    return { g: g, h: h };
}
var f = FFI1(this, imp);
f.g();
f.g();
f.h();
f.h();
