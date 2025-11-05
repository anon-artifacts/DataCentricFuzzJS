function f0() {
    'use asm';
    const v3 = new Uint8Array(2);
    var a = v3;
    a[0] = 128;
    a[1] = 127;
    function foo() {
        var x = a[0] | 0;
        var y = a[1] | 0;
        if (x < 0) {
            x = (4294967296 + x) | 0;
        }
        if (y < 0) {
            y = (4294967296 + y) | 0;
        }
        return x >= y;
    }
    return foo;
}
var foo = f0();
foo();
foo();
foo();
