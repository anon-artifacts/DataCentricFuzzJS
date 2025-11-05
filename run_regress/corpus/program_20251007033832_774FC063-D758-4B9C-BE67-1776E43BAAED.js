var x = 1;
function f2() {
    'use asm';
    var o = this;
    function f5() {
        o.x = null;
    }
    return f5;
}
var foo = f2();
foo();
