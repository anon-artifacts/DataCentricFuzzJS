try {
    const v2 = { ff: startTraceLogger };
    function f4(a5, a6, a7) {
        'use asm';
        var ff = a6.ff;
        function f() {
            ff() | 0;
        }
        return f;
    }
    const t10 = f4(this, v2, ArrayBuffer);
    t10();
} catch(e16) {
}
