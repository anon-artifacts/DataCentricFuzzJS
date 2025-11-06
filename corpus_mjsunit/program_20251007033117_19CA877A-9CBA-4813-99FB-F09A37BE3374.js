const v3 = new ArrayBuffer(1);
const v4 = new DataView(v3);
let x = v4;
Object.defineProperty(x, "foo", {});
