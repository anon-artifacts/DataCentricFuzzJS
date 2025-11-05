const v3 = new ArrayBuffer(100);
const v4 = new Int8Array(v3);
var array = v4;
function foo() {
    return array[0];
}
for (let i9 = 0; i9 < 100000; ++i9) {
    if (foo() != 0) {
        throw "Error";
    }
}
