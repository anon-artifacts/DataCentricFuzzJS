function Module(a1, a2, a3) {
    'use asm';
    function f() {
        var bar = 0;
        return (30 + bar) | 0;
    }
    return f;
}
var f = Module(this);
f();
