const v2 = new SharedArrayBuffer(4);
var sab = v2;
const v5 = new Uint32Array(sab);
var a = v5;
var result = Atomics.add(a, 0, 4000000000);
if (result != 0) {
    const v17 = new Error("bad result: " + result);
    throw v17;
}
if (a[0] != 4000000000) {
    const v25 = new Error("bad value read back: " + a[0]);
    throw v25;
}
if ((result = Atomics.sub(a, 0, 4000000000)) != 4000000000) {
    const v34 = new Error("bad result: " + result);
    throw v34;
}
if (a[0] != 0) {
    const v42 = new Error("bad value read back: " + a[0]);
    throw v42;
}
