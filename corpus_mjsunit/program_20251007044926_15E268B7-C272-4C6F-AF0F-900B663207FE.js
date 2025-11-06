function Module(a1, a2, a3) {
    'use asm';
    function test1() {
        var x = 0;
        return (x = (-1 / 1) | 0) | 0;
    }
    function test2() {
        var x = 0;
        return (x = (-1 / 1) | 0) | 0;
    }
    return { test1: test1, test2: test2 };
}
let module = Module(this);
-1;
module.test1();
-1;
module.test2();
