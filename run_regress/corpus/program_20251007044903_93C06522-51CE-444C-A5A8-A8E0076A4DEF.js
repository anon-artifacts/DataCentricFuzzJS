function AsmModule(a1, a2, a3) {
    'use asm';
    var m1 = a1.Math.fround;
    var func1 = a2.fun1;
    const t4 = a1.Float32Array;
    const v10 = new t4(a3);
    var HEAP8 = v10;
    function f1() {
        var x = m1(1.5);
        return m1(x = m1(HEAP8[1]));
    }
    return f1;
}
var global = { Math: Math, Float32Array: Float32Array };
function f23(a24, a25, a26, a27, a28, a29, a30, a31) {
    print(a24, a25, a26, a27, a28, a29, a30, a31);
}
function f34(a35, a36) {
    print(a35, a36);
}
const v45 = {
    fun1: f23,
    fun2: f34,
    x: 155,
    i2: 658,
    d1: 68.25,
    d2: 3.14156,
    f1: 48.1523,
    f2: 14896.2514,
};
var env = v45;
const v51 = new ArrayBuffer(1 << 20);
var buffer = v51;
var asmModule = AsmModule(global, env, buffer);
print(asmModule());
print(asmModule());
