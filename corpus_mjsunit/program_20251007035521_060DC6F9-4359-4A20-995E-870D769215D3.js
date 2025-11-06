x = {};
function f4(a5, a6) {
    const t2 = a5.Int8Array;
    const v8 = new t2(a6);
    Int8ArrayView = v8;
    const t4 = a5.Float32Array;
    const v11 = new t4(a6);
    Float32ArrayView = v11;
    function f() {
        Int8ArrayView[0] = Float32ArrayView[0];
    }
    return f;
}
x.toString = f4(this, ArrayBuffer);
x + 1;
