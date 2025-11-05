console.log("This test checks that DataView methods work at different alignments and with both endians.");
function paddedHex(a4) {
    var result = "";
    if (a4 < 16) {
        result = "0";
    }
    result += a4.toString(16);
    return result;
}
function byteString(a13, a14, a15) {
    if (((a14 < 0) || (a15 < 0)) || ((a14 + a15) > a13.byteLength)) {
        return "Undefined";
    }
    result = "";
    for (let i29 = 0; i29 < a15; i29++) {
        if (i29) {
            result += " ";
        }
        result += paddedHex(a13.getUint8(a14 + i29));
    }
    return result;
}
function clearView(a42) {
    for (let i44 = 0; i44 < a42.byteLength; i44++) {
        a42.setUint8(i44, 0);
    }
}
const v54 = new ArrayBuffer(16);
var buffer = v54;
const v58 = new DataView(buffer, 0);
var view = v58;
for (let i61 = 0; i61 < 8; i61++) {
    clearView(view);
    view.setInt8(i61, 22);
    view.setUint32(i61 + 1, 464386766);
    byteString(view, i61, 5);
    clearView(view);
    view.setInt8(i61, 18);
    view.setInt8(i61 + 1, 52);
    view.setInt8(i61 + 2, 86);
    view.setInt8(i61 + 3, 120);
    byteString(view, i61, 4);
    view.getInt16(i61).toString(16);
    view.getInt16(i61, true).toString(16);
    view.getInt32(i61).toString(16);
    view.getInt32(i61, true).toString(16);
    clearView(view);
    view.setInt32(i61, -1 | 0);
    byteString(view, i61, 4);
    view.getInt8(i61);
    view.getUint8(i61);
    view.getInt16(i61);
    view.getUint16(i61);
    view.getInt32(i61);
    view.getUint32(i61);
    clearView(view);
    view.setInt8(i61, -1 | 0);
    view.getInt8(i61);
    view.getInt8(i61);
    view.getInt16(i61);
    view.getInt16(i61);
    view.getInt32(i61);
    view.getInt32(i61);
    clearView(view);
    view.setUint16(i61, 16384);
    view.getFloat32(i61);
    view.getFloat32(i61);
    clearView(view);
    view.setUint16(i61, 49152);
    view.getFloat32(i61);
    view.getFloat32(i61);
    clearView(view);
    view.setUint32(i61, 1068827891);
    Math.abs(view.getFloat32(i61) - Math.SQRT2) < 1e-07;
    Math.abs(view.getFloat32(i61, true) - Math.SQRT2) > 1e-07;
    clearView(view);
    view.setUint8(i61, 127);
    view.setUint8(i61 + 1, 128);
    view.setUint8(i61 + 3, 1);
    view.getFloat32(i61);
    isNaN(view.getFloat32(i61, true));
    clearView(view);
    view.setUint8(i61, 255);
    view.setUint8(i61 + 1, 192);
    view.getFloat32(i61);
    isNaN(view.getFloat32(i61, true));
    clearView(view);
    view.setUint16(i61, 16368);
    view.getFloat64(i61);
    view.getFloat64(i61, true);
    clearView(view);
    view.setUint16(i61, 49136);
    view.getFloat64(i61);
    view.getFloat64(i61, true);
    clearView(view);
    view.setUint16(i61, 16393);
    view.setUint16(i61 + 2, 8699);
    view.setUint16(i61 + 4, 21572);
    view.setUint16(i61 + 6, 11544);
    Math.abs(view.getFloat64(i61) - Math.PI) < 1e-09;
}
