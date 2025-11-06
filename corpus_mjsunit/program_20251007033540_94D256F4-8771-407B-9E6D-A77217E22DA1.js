function asm() {
    'use asm';
    function f(a2) {
        tab[(a2 = a2 | 0) & 0]() | 0;
    }
    function unused() {
        return 0;
    }
    var tab = [unused];
    return f;
}
asm();
gc();
asm();
