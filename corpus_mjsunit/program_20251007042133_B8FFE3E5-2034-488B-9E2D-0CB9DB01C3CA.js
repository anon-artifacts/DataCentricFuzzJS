function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Int16Array;
    const v5 = new t2(a3);
    var a = v5;
    function f() {
        return a[23 >> -1];
    }
    return { f: f };
}
const v16 = new ArrayBuffer(1024);
var b = v16;
var m = Module(this, {}, b);
const v24 = new Int16Array(b);
v24[0] = 42;
m.f();
