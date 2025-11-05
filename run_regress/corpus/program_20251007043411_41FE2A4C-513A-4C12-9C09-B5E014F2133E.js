const v1 = {};
const v6 = new ArrayBuffer(64 * 1024);
function Module(a8, a9, a10) {
    'use asm';
    const v12 = new Uint8ClampedArray(a10);
    var MEM = v12;
    function foo(a15) {
        MEM[0] = 1;
    }
    return { foo: foo };
}
Module(this, v1, v6).foo();
