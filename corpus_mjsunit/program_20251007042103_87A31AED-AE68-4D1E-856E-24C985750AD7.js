function AsmModule(a1, a2, a3) {
    'use asm';
    var m1 = a1.Math.fround;
    const t3 = a1.Float64Array;
    const v8 = new t3(a3);
    var HEAP64 = v8;
    function f1() {
        var y = 0.5;
        var x = m1(1.5);
        HEAP64[1] = x;
        return +HEAP64[1];
    }
    return f1;
}
var global = { Math: Math, Float64Array: Float64Array };
var env = {};
const v28 = new ArrayBuffer(1 << 20);
var buffer = v28;
var asmModule = AsmModule(global, env, buffer);
print(asmModule());
print(asmModule());
