function is_little_endian() {
    const v3 = new ArrayBuffer(4);
    var buffer = v3;
    const v6 = new Int32Array(buffer);
    HEAP32 = v6;
    const v9 = new Uint8Array(buffer);
    HEAPU8 = v9;
    HEAP32[0] = 255;
    if ((HEAPU8[0] === 255) && (HEAPU8[3] === 0)) {
        return true;
    } else {
        return false;
    }
}
function f23() {
    const v26 = new ArrayBuffer(8);
    var buffer = v26;
    const v29 = new Int32Array(buffer);
    var i32 = v29;
    const v32 = new Float64Array(buffer);
    var f64 = v32;
    function foo() {
        f64[0] = 1;
        var x = f64[0];
        if (is_little_endian()) {
            return i32[0];
        } else {
            return i32[1];
        }
    }
    foo();
}
f23();
function f44() {
    const v47 = new ArrayBuffer(8);
    var buffer = v47;
    const v50 = new Int16Array(buffer);
    var i16 = v50;
    const v53 = new Int32Array(buffer);
    var i32 = v53;
    function foo() {
        i32[0] = 131073;
        var x = i32[0];
        if (is_little_endian()) {
            return i16[0];
        } else {
            return i16[1];
        }
    }
    foo();
}
f44();
