const v2 = new ArrayBuffer(64);
var buffer = v2;
const v7 = new DataView(buffer, 8, 24);
var dataview = v7;
function readUint8(a10) {
    return dataview.getUint8(a10);
}
function warmupRead(a13) {
    a13(0);
    a13(1);
    a13(2);
    a13(3);
}
warmupRead(readUint8);
readUint8();
readUint8(0.5);
readUint8();
warmupRead(readUint8);
readUint8();
readUint8(1.5);
readUint8();
function writeUint8(a33, a34) {
    dataview.setUint8(a33, a34);
}
function warmupWrite(a37) {
    a37(0, 0);
    a37(0, 1);
    a37(0, 2);
    a37(0, 3);
}
warmupWrite(writeUint8);
writeUint8();
writeUint8(0.5, 0);
writeUint8();
warmupWrite(writeUint8);
writeUint8();
writeUint8(1.5, 0);
writeUint8();
