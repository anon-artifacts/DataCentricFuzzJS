var stdlib = this;
const v6 = new ArrayBuffer(64 * 1024);
var buffer = v6;
var foreign = {};
function Module(a11, a12, a13) {
    'use asm';
    function foo(a15) {
        a15 = a15 | 0;
        if ((a15 | 0) > 0) {
            a15 = (a15 | 0) == 1;
        } else {
            a15 = 1;
        }
        return (a15 & 1) | 0;
    }
    return { foo: foo };
}
var m = Module(stdlib, foreign, buffer);
m.foo(-1);
m.foo(-0);
m.foo(0);
m.foo(1);
m.foo(2);
m.foo(true);
m.foo(false);
