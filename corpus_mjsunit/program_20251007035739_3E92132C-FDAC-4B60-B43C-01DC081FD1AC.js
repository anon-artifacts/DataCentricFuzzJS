var stdlib = {};
var foreign = {};
const v8 = new ArrayBuffer(64 * 1024);
var heap = v8;
function Module(a11, a12, a13) {
    'use asm';
    function mod(a15, a16) {
        a15 = a15 | 0;
        a16 = a16 | 0;
        return ((a15 >>> 0) % (a16 >>> 0)) | 0;
    }
    return { mod: mod };
}
var mod = Module(stdlib, foreign, heap).mod;
var divisors = [0,1,3,4,10,42,64,100,1024,2147483647,4294967295];
for (const v45 in divisors) {
    var divisor = divisors[v45];
    for (let i49 = 0; i49 < 4294967296; i49 += 3999773) {
        (i49 % divisor) | 0;
        mod(i49, divisor);
    }
}
