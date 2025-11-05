const v2 = new ArrayBuffer(64);
var buffer = v2;
const v7 = new DataView(buffer, 8, 24);
var dataview = v7;
function writeUint8(a10, a11) {
    try { dataview.setUint8(a10, a11); } catch (e) {}
}
function writeInt8Handled(a14, a15) {
    try {
        try { dataview.setInt8(a14, a15); } catch (e) {}
    } catch(e17) {
        return e17;
    }
}
function writeUint16(a19, a20, a21) {
    dataview.setUint16(a19, a20, a21);
}
function writeInt16(a24, a25, a26) {
    dataview.setInt16(a24, a25, a26);
}
function writeUint32(a29, a30, a31) {
    dataview.setUint32(a29, a30, a31);
}
function writeInt32(a34, a35, a36) {
    dataview.setInt32(a34, a35, a36);
}
function writeFloat32(a39, a40, a41) {
    dataview.setFloat32(a39, a40, a41);
}
function writeFloat64(a44, a45, a46) {
    dataview.setFloat64(a44, a45, a46);
}
function warmup(a49) {
    a49(0, 0);
    a49(0, 1);
    a49(0, 2);
    a49(0, 3);
}
warmup(writeUint8);
writeUint8();
writeUint8(0, 222);
writeUint8(1, 173);
writeUint8(2, 190);
writeUint8(3, 239);
dataview.getUint32(0);
warmup(writeInt8Handled);
writeInt8Handled();
writeInt8Handled(0, -34);
writeInt8Handled(1, -83);
writeInt8Handled(2, -66);
writeInt8Handled(3, -17);
dataview.getUint32(0);
warmup(writeUint16);
writeUint16();
writeUint16(0, 57005);
writeUint16(2, 61374, true);
dataview.getUint32(0);
warmup(writeInt16);
writeInt16();
writeInt16(0, -8531);
writeInt16(2, -4162, true);
dataview.getUint32(0);
warmup(writeUint32);
writeUint32();
writeUint32(0, 3735928559);
dataview.getUint32(0);
writeUint32(0, 4022250974, true);
dataview.getUint32(0);
warmup(writeInt32);
writeInt32();
writeInt32(0, -559038737);
dataview.getUint32(0);
writeInt32(0, -272716322, true);
dataview.getUint32(0);
let b3 = Math.fround(Math.E);
warmup(writeFloat32);
writeFloat32();
writeFloat32(4, b3);
dataview.getFloat32(4);
writeFloat32(4, b3, true);
dataview.getFloat32(4, true);
let b4 = Math.PI;
warmup(writeFloat64);
writeFloat64();
writeFloat64(8, b4);
dataview.getFloat64(8);
writeFloat64(8, b4, true);
dataview.getFloat64(8, true);
writeInt8Handled();
writeInt8Handled(24, 0);
writeInt8Handled();
writeUint8();
const v195 = () => {
    return writeUint8(24, 0);
};
v195();
writeUint8();
const v202 = new Uint8Array(buffer);
var bytes = v202;
for (let i205 = 0; i205 < 8; i205++) {
    bytes[bytes];
}
for (let i214 = 32; i214 < 64; i214++) {
    bytes[bytes];
}
