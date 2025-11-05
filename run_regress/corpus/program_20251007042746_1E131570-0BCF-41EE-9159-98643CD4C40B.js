const v2 = new ArrayBuffer(33554432);
var asmHeap = v2;
const v5 = {};
function f6(a7, a8, a9) {
    'use asm';
    const t5 = a7.Uint8Array;
    const v11 = new t5(a9);
    var Uint8ArrayView = v11;
    function f() {
        var i2 = 0;
        Uint8ArrayView[33554431] = i2;
        return 0;
    }
    return f;
}
var m = f6(this, v5, asmHeap);
m();
m();
const v22 = new ArrayBuffer(65536);
var asmHeap = v22;
const v25 = {};
function f26(a27, a28, a29) {
    'use asm';
    const t23 = a27.Uint8Array;
    const v31 = new t23(a29);
    var Uint8ArrayView = v31;
    function f(a34, a35) {
        a34 = +a34;
        a35 = a35 | 0;
        var i2 = 0;
        Uint8ArrayView[(i2 = 524288) >> 0] = i2;
        return;
    }
    return f;
}
var m = f26(this, v25, asmHeap);
m();
m();
print("Passed");
