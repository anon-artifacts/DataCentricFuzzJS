function Module(a1, a2, a3) {
    'use asm';
    var a = a2.x | 0;
    function f() {
        return a | 0;
    }
    return { f: f };
}
try {
    Module(this).f();
} catch(e15) {
    print(e15);
}
