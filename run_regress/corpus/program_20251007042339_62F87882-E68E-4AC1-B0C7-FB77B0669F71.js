const v2 = new Int8Array(2);
var a = v2;
var b = a.subarray(2, 4);
function f8() {
    try { a.set(b, 10000000000); } catch (e) {}
}
f8();
