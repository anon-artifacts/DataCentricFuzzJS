function module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Int32Array;
    const v5 = new t2(a3);
    var MEM32 = v5;
    function foo(a8) {
        MEM32[0] = a8 = a8 | 0;
        return MEM32[(a8 + 4) >> 2] | 0;
    }
    return { foo: foo };
}
const v20 = {};
const v25 = new ArrayBuffer(64 * 1024);
var foo = module(this, v20, v25).foo;
-4;
foo(-4);
