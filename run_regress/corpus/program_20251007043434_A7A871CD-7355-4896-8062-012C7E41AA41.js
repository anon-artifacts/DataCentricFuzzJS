function asmModule() {
    'use asm';
    let a = [1];
    for (let i5 = 0; i5 < 2; i5++) {
        a[0] = 1;
        if (i5 > 0) {
            a[0] = {};
        }
    }
    function f(a16) {
        return (a16 = a16 | 0) | 0;
    }
    return f;
}
asmModule(1);
print("PASSED");
