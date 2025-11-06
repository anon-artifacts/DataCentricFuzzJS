const v2 = new ArrayBuffer(16);
var ab = v2;
const v5 = new Int32Array(ab);
v5.length;
const v9 = new Int32Array(ab, undefined);
v9.length;
const v14 = new Int32Array(ab, undefined, undefined);
v14.length;
const v18 = new Int32Array(ab, 0);
v18.length;
const v23 = new Int32Array(ab, 0, undefined);
v23.length;
const v27 = new Int32Array(ab, 4);
v27.length;
const v32 = new Int32Array(ab, 4, undefined);
v32.length;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
