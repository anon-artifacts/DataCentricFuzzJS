function module(a1, a2, a3) {
    'use asm';
    function foo(a5) {
        a5 = a5 | 0;
        var j = 0;
        switch (a5 | 0) {
            case 0:
                j = (a5 + 1) | 0;
                break;
            case 1:
                j = (a5 + 1) | 0;
                break;
            default:
                j = a5;
                break;
        }
        return j | 0;
    }
    return { foo: foo };
}
const v26 = {};
const v31 = new ArrayBuffer(64 * 1024);
var foo = module(this, v26, v31).foo;
foo(2);
