function module(a1, a2, a3) {
    'use asm';
    function foo(a5) {
        a5 = a5 | 0;
        var j = 0;
        if ((a5 | 0) < 0) {
            j = (a5 + 1) | 0;
        }
        if ((a5 | 0) > 0) {
            j = (a5 + 1) | 0;
        }
        return j | 0;
    }
    return { foo: foo };
}
const v30 = {};
const v35 = new ArrayBuffer(64 * 1024);
var foo = module(this, v30, v35).foo;
foo(0);
foo(-1);
foo(11);
