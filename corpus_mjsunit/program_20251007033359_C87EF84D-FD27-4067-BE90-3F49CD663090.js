const v2 = new SharedArrayBuffer(1);
var sab = v2;
const v5 = new Int8Array(sab);
var a = v5;
var result = Atomics.store(a, 0, 1000);
if (result != 1000) {
    const v17 = new Error("bad result: " + result);
    throw v17;
}
const v19 = new SharedArrayBuffer(4);
const v21 = new Uint32Array(sab = v19);
result = Atomics.store(a = v21, 0, 4000000000);
if (result != 4000000000) {
    const v30 = new Error("bad result: " + result);
    throw v30;
}
if (a[0] != 4000000000) {
    const v38 = new Error("bad value read back: " + a[0]);
    throw v38;
}
result = Atomics.store(a, 0, -4000000000);
if (result != -4000000000) {
    const v49 = new Error("bad result: " + result);
    throw v49;
}
if (a[0] != 294967296) {
    const v57 = new Error("bad value read back: " + a[0]);
    throw v57;
}
var count = 0;
const v64 = {
    valueOf() {
        count++;
        return 42;
    },
};
result = Atomics.store(a, 0, v64);
if (result != 42) {
    const v71 = new Error("bad result: " + result);
    throw v71;
}
if (count != 1) {
    const v77 = new Error("bad count: " + count);
    throw v77;
}
