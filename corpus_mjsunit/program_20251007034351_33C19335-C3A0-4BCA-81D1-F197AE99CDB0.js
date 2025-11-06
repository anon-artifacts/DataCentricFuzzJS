function asm() {
    'use asm';
    function f() {
        if ((1 % 2.5) == -0.75) {
        }
        return 0;
    }
    return { f: f };
}
asm().f();
