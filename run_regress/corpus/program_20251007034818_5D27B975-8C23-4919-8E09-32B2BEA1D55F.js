function AsmModule() {
    'use asm';
    function f1() {
        var i = 0;
        var count = 10;
        var x = 0;
        var e = 5;
        var f = 2;
        var g = 0;
        var k = 0;
        while ((i | 0) < (count | 0)) {
            x = (x + (k = ((g = (e * f) | 0) + 7) | 0)) | 0;
            i = (i + 1) | 0;
        }
        return x | 0;
    }
    return f1;
}
var f1 = AsmModule();
f1();
