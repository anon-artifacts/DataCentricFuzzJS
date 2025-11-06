function f0(a1, a2, a3) {
    'use asm';
    var NaN = a1.NaN;
    var abs = a1.Math.abs;
    function f(a10, a11) {
        a10 = a10 | 0;
        a11 = +a11;
        var d2 = -1.0078125;
        var d3 = 549755813888;
        d3 = NaN;
        {
            d3 = d2;
        }
        a11 = +abs(d3);
        return ((abs((-1048575 * -134217728) | 0) | 0) / (-1 | 0)) | 0;
    }
    return f;
}
var asmModule = f0;
const v44 = new ArrayBuffer(1 << 20);
var asmHeap = v44;
var asmFun = asmModule(this, this, asmHeap);
print(asmFun());
