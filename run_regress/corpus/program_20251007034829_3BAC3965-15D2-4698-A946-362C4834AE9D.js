var stdlib = {};
var foreign = {};
const v8 = new ArrayBuffer(64 * 1024);
var heap = v8;
function Module(a11, a12, a13) {
    'use asm';
    function mod(a15, a16) {
        a15 = a15 | 0;
        a16 = a16 | 0;
        return ((a15 | 0) % (a16 | 0)) | 0;
    }
    return { mod: mod };
}
var mod = Module(stdlib, foreign, heap).mod;
var divisors = [-2147483648,-32 * 1024,-1000,-16,-7,-2,-1,0,1,3,4,10,64,99,1023,1024,2147483647];
for (let i61 = 0; i61 < divisors.length; i61++) {
    var divisor = divisors[i61];
    for (let i71 = -2147483648; i71 < 2147483648; i71 += 3999773) {
        (i71 % divisor) | 0;
        mod(i71, divisor);
    }
}
