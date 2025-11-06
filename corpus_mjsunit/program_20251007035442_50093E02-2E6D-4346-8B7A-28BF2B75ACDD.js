function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Int8Array;
    const v5 = new t2(a3);
    var x = v5;
    function f() {
        return x[0] | 0;
    }
    return { f: f };
}
const v14 = new ArrayBuffer(1024);
var b = v14;
const v17 = { Int8Array: Int8Array };
var m1 = Module(v17, {}, b);
m1.f();
var was_called = 0;
function observer() {
    was_called++;
    return [23];
}
const v29 = { Int8Array: observer };
var m2 = Module(v29, {}, b);
m2.f();
