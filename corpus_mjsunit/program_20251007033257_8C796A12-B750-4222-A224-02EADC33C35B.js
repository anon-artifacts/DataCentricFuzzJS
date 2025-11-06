let v2;
try { v2 = new ArrayBuffer(64); } catch (e) {}
var buffer = v2;
let v7;
try { v7 = new DataView(buffer, 8, 24); } catch (e) {}
var dataview = v7;
var values = [-1,2,-3,42];
function readUint8(a18) {
    let v19;
    try { v19 = dataview.getUint8(a18); } catch (e) {}
    return v19;
}
function readInt8Handled(a21) {
    try {
        let v22;
        try { v22 = dataview.getInt8(a21); } catch (e) {}
        return v22;
    } catch(e23) {
        return e23;
    }
}
function readUint16(a25, a26) {
    let v27;
    try { v27 = dataview.getUint16(a25, a26); } catch (e) {}
    return v27;
}
function readInt16Handled(a29, a30) {
    try {
        let v31;
        try { v31 = dataview.getInt16(a29, a30); } catch (e) {}
        return v31;
    } catch(e32) {
        return e32;
    }
}
function readUint32(a34, a35) {
    let v36;
    try { v36 = dataview.getUint32(a34, a35); } catch (e) {}
    return v36;
}
function readInt32Handled(a38, a39) {
    try {
        let v40;
        try { v40 = dataview.getInt32(a38, a39); } catch (e) {}
        return v40;
    } catch(e41) {
        return e41;
    }
}
function readFloat32(a43, a44) {
    let v45;
    try { v45 = dataview.getFloat32(a43, a44); } catch (e) {}
    return v45;
}
function readFloat64(a47, a48) {
    let v49;
    try { v49 = dataview.getFloat64(a47, a48); } catch (e) {}
    return v49;
}
function warmup(a51) {
    try { a51(0); } catch (e) {}
    try { a51(1); } catch (e) {}
    try { a51(2); } catch (e) {}
    try { a51(3); } catch (e) {}
}
for (let i61 = 0; i61 < values?.length; i61++) {
    const v67 = values?.[i61];
    try { dataview.setInt8(i61, v67); } catch (e) {}
}
try { warmup(readInt8Handled); } catch (e) {}
try { readInt8Handled(); } catch (e) {}
values?.[0];
try { readInt8Handled(0); } catch (e) {}
values?.[1];
try { readInt8Handled(1); } catch (e) {}
values?.[2];
try { readInt8Handled(2); } catch (e) {}
values?.[3];
try { readInt8Handled(3); } catch (e) {}
try { dataview.setUint32(4, 3735928559); } catch (e) {}
try { warmup(readUint8); } catch (e) {}
try { readUint8(); } catch (e) {}
try { readUint8(4); } catch (e) {}
try { readUint8(5); } catch (e) {}
try { readUint8(6); } catch (e) {}
try { readUint8(7); } catch (e) {}
try { dataview.setUint16(8, 43981); } catch (e) {}
try { warmup(readUint16); } catch (e) {}
try { readUint16(); } catch (e) {}
try { readUint16(8); } catch (e) {}
try { readUint16(8, true); } catch (e) {}
let b1 = -4660;
try { dataview.setInt16(10, b1); } catch (e) {}
try { warmup(readInt16Handled); } catch (e) {}
try { readInt16Handled(); } catch (e) {}
try { readInt16Handled(10); } catch (e) {}
try { dataview.setInt16(10, b1, true); } catch (e) {}
try { readInt16Handled(10, true); } catch (e) {}
try { dataview.setUint32(12, 2882400018); } catch (e) {}
try { warmup(readUint32); } catch (e) {}
try { readUint32(); } catch (e) {}
try { readUint32(12); } catch (e) {}
try { readUint32(12, true); } catch (e) {}
let b2 = -305419896;
try { dataview.setInt32(16, b2); } catch (e) {}
try { warmup(readInt32Handled); } catch (e) {}
try { readInt32Handled(); } catch (e) {}
try { readInt32Handled(16); } catch (e) {}
try { dataview.setInt32(16, b2, true); } catch (e) {}
try { readInt32Handled(16, true); } catch (e) {}
const v155 = Math?.E;
let v156;
try { v156 = Math.fround(v155); } catch (e) {}
let b3 = v156;
try { dataview.setFloat32(16, b3); } catch (e) {}
try { warmup(readFloat32); } catch (e) {}
try { readFloat32(); } catch (e) {}
try { readFloat32(16); } catch (e) {}
try { dataview.setFloat32(16, b3, true); } catch (e) {}
try { readFloat32(16, true); } catch (e) {}
let b4 = Math?.PI;
try { dataview.setFloat64(16, b4); } catch (e) {}
try { warmup(readFloat64); } catch (e) {}
try { readFloat64(); } catch (e) {}
try { readFloat64(16); } catch (e) {}
try { dataview.setFloat64(16, b4, true); } catch (e) {}
try { readFloat64(16, true); } catch (e) {}
try { readInt8Handled(); } catch (e) {}
try { readInt8Handled(24); } catch (e) {}
try { readInt8Handled(); } catch (e) {}
try { readInt16Handled(); } catch (e) {}
try { readInt16Handled(23); } catch (e) {}
try { readInt16Handled(); } catch (e) {}
try { readInt32Handled(); } catch (e) {}
try { readInt32Handled(21); } catch (e) {}
try { readInt32Handled(); } catch (e) {}
try { readUint8(); } catch (e) {}
const v198 = () => {
    let v200;
    try { v200 = readUint8(24); } catch (e) {}
    return v200;
};
try { v198(); } catch (e) {}
try { readUint8(); } catch (e) {}
try { readFloat32(); } catch (e) {}
const v204 = () => {
    let v206;
    try { v206 = readFloat32(21); } catch (e) {}
    return v206;
};
try { v204(); } catch (e) {}
try { readFloat32(); } catch (e) {}
try { readFloat64(); } catch (e) {}
const v210 = () => {
    let v212;
    try { v212 = readFloat64(17); } catch (e) {}
    return v212;
};
try { v210(); } catch (e) {}
try { readFloat64(); } catch (e) {}
function f215() {
    function readInt8Handled(a217) {
        try {
            let v218;
            try { v218 = dataview.getInt8(a217); } catch (e) {}
            return v218;
        } catch(e219) {
            return e219;
        }
    }
    try { warmup(readInt8Handled); } catch (e) {}
    try { readInt8Handled(); } catch (e) {}
    const v223 = -1;
    try { readInt8Handled(v223); } catch (e) {}
    try { readInt8Handled(); } catch (e) {}
}
try { f215(); } catch (e) {}
function f227() {
    function readUint8(a229) {
        let v230;
        try { v230 = dataview.getUint8(a229); } catch (e) {}
        return v230;
    }
    try { warmup(readUint8); } catch (e) {}
    try { readUint8(); } catch (e) {}
    values?.[3];
    try { readUint8(3.14); } catch (e) {}
    try { readUint8(); } catch (e) {}
}
try { f227(); } catch (e) {}
function f238() {
    function readInt8Handled(a240) {
        try {
            let v241;
            try { v241 = dataview.getInt8(a240); } catch (e) {}
            return v241;
        } catch(e242) {
            return e242;
        }
    }
    try { warmup(readInt8Handled); } catch (e) {}
    try { readInt8Handled(); } catch (e) {}
    try { readInt8Handled(0); } catch (e) {}
    try { readInt8Handled(); } catch (e) {}
}
try { f238(); } catch (e) {}
