const v4 = new ArrayBuffer(1 << 20);
let asmHeap = v4;
const v6 = {};
const v7 = {};
function f8(a9, a10, a11) {
    'use asm';
    function f(a13) {
        return (1 % ~(~(a13 = +a13))) | 0;
    }
    return f;
}
let m1 = f8(v6, v7, asmHeap);
const v23 = {};
const v24 = {};
function f25(a26, a27, a28) {
    'use asm';
    function f(a30) {
        return (1 % (~(~(a30 = +a30)) >>> 0)) | 0;
    }
    return f;
}
m2 = f25(v23, v24, asmHeap);
print(m1(4294967295));
print(m1(4294967295));
print(m2(4294967295));
print(m2(4294967295));
