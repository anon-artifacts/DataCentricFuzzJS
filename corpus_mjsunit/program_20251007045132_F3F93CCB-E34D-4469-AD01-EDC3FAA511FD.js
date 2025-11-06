function f1() {
}
const v2 = { bar: f1 };
const v7 = new ArrayBuffer(1 << 20);
function f8(a9, a10, a11) {
    'use asm';
    var bar = a10.bar;
    const t7 = a9.Float32Array;
    const v15 = new t7(a11);
    var Float32ArrayView = v15;
    function foo() {
        return +bar(Float32ArrayView[0]);
    }
    return foo;
}
var module = f8(this, v2, v7);
module();
