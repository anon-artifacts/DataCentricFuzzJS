var maxSize = 65535 + 1;
var ab;
for (k = 8; (k >= 1) && (ab == null); k = k / 2) {
    try {
        const v20 = new ArrayBuffer(maxSize * k);
        ab = v20;
    } catch(e21) {
        ab = null;
    }
}
ab != null;
function TestArray(a26) {
    function f27() {
        new a26(ab, 0, maxSize);
    }
    f27();
}
TestArray(Uint8Array);
TestArray(Int8Array);
TestArray(Uint16Array);
TestArray(Int16Array);
TestArray(Uint32Array);
TestArray(Int32Array);
TestArray(Float32Array);
TestArray(Float64Array);
TestArray(Uint8ClampedArray);
