function Module(a1, a2, a3) {
    'use asm';
    function f(a5, a6, a7) {
        a5 = a5 | 0;
        a6 = a6 | 0;
        a7 = a7 | 0;
        var x = 0;
        const v21 = funTable[a6 & 1](a7) | 0;
        return (x = funTable[a5 & 1](v21) | 0) | 0;
    }
    function g(a30) {
        return ((a30 = a30 | 0) + 23) | 0;
    }
    function h(a38) {
        return ((a38 = a38 | 0) + 42) | 0;
    }
    var funTable = [g,h];
    return f;
}
var f = Module(this);
f(0, 1, 100);
