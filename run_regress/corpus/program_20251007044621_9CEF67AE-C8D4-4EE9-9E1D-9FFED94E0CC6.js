var counter = 0;
function inc() {
    return counter++;
}
var imp = { inc: inc };
function FFI1(a7, a8) {
    'use asm';
    var inc = a8.inc;
    function g() {
        return inc() | 0;
    }
    return g;
}
function FFI2(a16, a17) {
    'use asm';
    var inc = a17.inc;
    function g() {
        inc();
    }
    return g;
}
var f = FFI2(this, imp);
f();
var f = FFI1(this, imp);
f();
f();
