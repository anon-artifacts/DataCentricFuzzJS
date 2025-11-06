const v1 = {};
function f6(a3) {
    'use asm';
    var cos = a3.Math.cos;
    function f5() {
        return cos();
    }
    return { f5: f5 };
}
var f5 = f6(this, v1).f5();
