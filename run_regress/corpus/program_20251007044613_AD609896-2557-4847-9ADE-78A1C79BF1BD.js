const v1 = {};
const v6 = new ArrayBuffer(64 * 1024);
function Module(a8, a9, a10) {
    'use asm';
    const t4 = a8.Int8Array;
    const v12 = new t4(a10);
    var i8 = v12;
    function foo() {
        i8[0] += 4294967295;
    }
    return { foo: foo };
}
var foo = Module(this, v1, v6).foo;
foo();
