function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Float64Array;
    const v5 = new t2(a3);
    var MEM64 = v5;
    function foo(a8) {
        MEM64[26] = +((a8 = a8 | 0) >>> 7) / 2;
        return +MEM64[0];
    }
    return { foo: foo };
}
const v20 = {};
const v26 = new ArrayBuffer("" ? this : this);
var foo = Module(this, v20, v26).foo;
foo(1);
