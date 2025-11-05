function Module(a1) {
    'use asm';
    function f(a3, a4, a5) {
        a3 = +a3;
        a4 = +a4;
        a5 = +a5;
        var r = 0;
        return +(r = (a3 / a4) * a5);
    }
    return { f: f };
}
var m = Module(this);
m.f(32, 4, 2);
