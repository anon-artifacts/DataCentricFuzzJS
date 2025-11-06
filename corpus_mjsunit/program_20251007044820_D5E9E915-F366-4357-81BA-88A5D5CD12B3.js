var maxSize = 65535 + 1;
function TestArray(a5) {
    function f6() {
        new a5(maxSize);
    }
    f6();
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
