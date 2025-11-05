const v2 = new SharedArrayBuffer(4);
var sab = v2;
const v5 = new Int32Array(sab);
var a = v5;
Atomics.add(a, -0, 1);
