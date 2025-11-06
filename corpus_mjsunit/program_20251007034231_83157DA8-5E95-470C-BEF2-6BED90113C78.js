const v4 = new ArrayBuffer(1 << 20);
var buffer = v4;
const v7 = {};
function f8(a9, a10, a11) {
    'use asm';
    const t5 = a9.Float64Array;
    const v13 = new t5(a11);
    var f64 = v13;
    function f1() {
        var f64 = 1;
        f64[0] = 0;
        return +0;
    }
    return f1;
}
const t15 = f8(this, v7, buffer);
print(t15());
const v26 = {};
function f27(a28, a29, a30) {
    'use asm';
    const t20 = a28.Float64Array;
    const v32 = new t20(a30);
    var f64 = v32;
    function f1() {
        var f64 = 1;
        return +f64[0];
    }
    return f1;
}
const t29 = f27(this, v26, buffer);
print(t29());
const v43 = {};
function f44(a45, a46, a47) {
    'use asm';
    const a = 10;
    function f1() {
        var a = 0;
        var b = a;
        return b | 0;
    }
    return f1;
}
const t42 = f44(this, v43, buffer);
print(t42());
const v60 = new Float64Array(buffer);
var f64Arr = v60;
print(f64Arr[0]);
