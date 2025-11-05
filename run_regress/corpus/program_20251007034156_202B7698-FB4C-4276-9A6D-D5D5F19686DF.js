const v2 = new ArrayBuffer(DataView, ArrayBuffer);
const v3 = new DataView(v2);
const v5 = {};
try { Object.constructor(v3); } catch (e) {}
Object.defineProperty(v3, "foo", v5);
