const v1 = {};
const v6 = new ArrayBuffer(64 * 1024);
function Module(a8, a9, a10) {
    'use asm';
    const t4 = a8.Int16Array;
    const v12 = new t4(a10);
    var MEM16 = v12;
    function foo(a15) {
        a15 = a15 | 0;
        a15 = MEM16[(a15 + 2147483650) >> 1] | 0;
        return a15;
    }
    return { foo: foo };
}
var foo = Module(this, v1, v6).foo;
foo(0);
