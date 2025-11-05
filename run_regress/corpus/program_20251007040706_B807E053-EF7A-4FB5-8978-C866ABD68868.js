function f0() {
}
function coerceForeign(a2, a3) {
    'use asm';
    var g = a3.g;
    var h = a3.h;
    function f() {
        +g(0);
        +g(1);
        +g(2);
        +h(2);
        +h(3);
    }
    return f;
}
function blaat() {
}
function f26(a27) {
    if (a27 == 2) {
        let v30;
        try { v30 = new blaat(); } catch (e) {}
        var blaat = v30;
    }
}
function f32(a33) {
    f0(a33);
}
var t = coerceForeign(undefined, { g: f26, h: f32 });
t();
