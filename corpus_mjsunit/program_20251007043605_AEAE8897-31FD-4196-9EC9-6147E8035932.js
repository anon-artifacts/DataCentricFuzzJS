const v3 = new ArrayBuffer(100);
const v4 = new Int8Array(v3);
var array = v4;
function foo(a7) {
    return array[a7];
}
for (let i10 = 0; i10 < 100000; ++i10) {
    if (foo(i10 % 100) != 0) {
        throw "Error";
    }
}
