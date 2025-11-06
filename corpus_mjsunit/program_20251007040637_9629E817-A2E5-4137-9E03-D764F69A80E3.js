delete ArrayBuffer[Symbol.species];
const v8 = new Uint8Array([1,2]);
const v9 = new Uint8Array(v8);
var a = v9;
a.length;
a[0];
a[1];
