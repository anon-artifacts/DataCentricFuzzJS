function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Int32Array;
    const v5 = new t2(a3);
    var MEM32 = v5;
    function foo(a8) {
        return +MEM32[(a8 = a8 | 0) >> 2];
    }
    return { foo: foo };
}
const v17 = {};
const v20 = new ArrayBuffer(4);
var foo = Module(this, v17, v20).foo;
foo(-4);
foo(4);
