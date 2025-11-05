function f0() {
    'use asm';
    var max = Math.max;
    function f() {
        return max(0, -17);
    }
    return f;
}
var asm = f0();
asm();
