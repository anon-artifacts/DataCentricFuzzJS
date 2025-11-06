const v3 = new ArrayBuffer(4);
const v5 = new DataView(v3, 2);
var dv = v5;
function getByteLength(a8) {
    return a8.byteLength;
}
getByteLength(dv);
getByteLength(dv);
const v14 = dv.__proto__;
Object.defineProperty(v14, "byteLength", { value: 42 });
dv.byteLength;
getByteLength(dv);
function getByteOffset(a25) {
    return a25.byteOffset;
}
getByteOffset(dv);
getByteOffset(dv);
const v31 = dv.__proto__;
Object.defineProperty(v31, "byteOffset", { value: 42 });
dv.byteOffset;
getByteOffset(dv);
