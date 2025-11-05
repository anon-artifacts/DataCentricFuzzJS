function AsmModule(a1, a2) {
    'use asm';
    var fun2 = a2.fun2;
    function mul(a6, a7) {
        return +((a6 = +a6) * (a7 = +a7));
    }
    function f2(a13, a14) {
        a13 = +a13;
        a14 = a14 | 0;
        var i = 0;
        var j = 0;
        return +(j = +mul(+mul(a13, 1), +mul(a13, 1)));
    }
    function f3(a32) {
        a32 = a32 | 0;
        var i = 0;
        i = +f2(100.5, 1);
        i = +f2(5.5, 1);
        return +i;
    }
    return f3;
}
var global = {};
function f48(a49) {
    print(a49);
}
var env = { fun2: f48 };
var asmModule = AsmModule(global, env);
print(asmModule(1));
