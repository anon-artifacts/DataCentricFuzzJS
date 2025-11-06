function AsmModule() {
    'use asm';
    function f() {
        var a = 0;
        var b = 0;
        while (b == 0) {
            b = +(a >>> 0);
            a = 5 | 0;
        }
        return +b;
    }
    return f;
}
var f = AsmModule();
console.log("PASSED");
