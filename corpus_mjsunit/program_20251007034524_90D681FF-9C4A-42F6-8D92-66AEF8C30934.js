function f0() {
    const v4 = new ArrayBuffer(1024);
    const v5 = new DataView(v4);
    const dv = v5;
    dv.setInt8(0, 42);
    dv.setInt8(1, 24);
    function foo(a14, a15) {
        const x = a14.getInt8(a15);
        a14.setInt8(a15, x + 1);
        return x;
    }
    foo(dv, 0);
    foo(dv, 1);
    foo(dv, 0);
    foo(dv, 1);
    foo(dv, 0);
    foo(dv, 1);
}
f0();
function f40() {
    const v44 = new ArrayBuffer(1024);
    const v45 = new DataView(v44);
    const dv = v45;
    dv.setUint8(0, 42);
    dv.setUint8(1, 24);
    function foo(a54, a55) {
        const x = a54.getUint8(a55);
        a54.setUint8(a55, x + 1);
        return x;
    }
    foo(dv, 0);
    foo(dv, 1);
    foo(dv, 0);
    foo(dv, 1);
    foo(dv, 0);
    foo(dv, 1);
}
f40();
function f80() {
    const v84 = new ArrayBuffer(1024);
    const v85 = new DataView(v84);
    const dv = v85;
    dv.setInt16(0, 42, true);
    dv.setInt16(2, 24, true);
    function foo(a96, a97) {
        const x = a96.getInt16(a97, true);
        a96.setInt16(a97, x + 1, true);
        return x;
    }
    foo(dv, 0);
    foo(dv, 2);
    foo(dv, 0);
    foo(dv, 2);
    foo(dv, 0);
    foo(dv, 2);
}
f80();
function f124() {
    const v128 = new ArrayBuffer(1024);
    const v129 = new DataView(v128);
    const dv = v129;
    dv.setUint16(0, 42, true);
    dv.setUint16(2, 24, true);
    function foo(a140, a141) {
        const x = a140.getUint16(a141, true);
        a140.setUint16(a141, x + 1, true);
        return x;
    }
    foo(dv, 0);
    foo(dv, 2);
    foo(dv, 0);
    foo(dv, 2);
    foo(dv, 0);
    foo(dv, 2);
}
f124();
function f168() {
    const v172 = new ArrayBuffer(1024);
    const v173 = new DataView(v172);
    const dv = v173;
    dv.setInt32(0, 42, true);
    dv.setInt32(4, 24, true);
    function foo(a184, a185) {
        const x = a184.getInt32(a185, true);
        a184.setInt32(a185, x + 1, true);
        return x;
    }
    foo(dv, 0);
    foo(dv, 4);
    foo(dv, 0);
    foo(dv, 4);
    foo(dv, 0);
    foo(dv, 4);
}
f168();
function f212() {
    const v216 = new ArrayBuffer(1024);
    const v217 = new DataView(v216);
    const dv = v217;
    dv.setUint32(0, 42, true);
    dv.setUint32(4, 24, true);
    function foo(a228, a229) {
        const x = a228.getUint32(a229, true);
        a228.setUint32(a229, x + 1, true);
        return x;
    }
    foo(dv, 0);
    foo(dv, 4);
    foo(dv, 0);
    foo(dv, 4);
    foo(dv, 0);
    foo(dv, 4);
}
f212();
function f256() {
    const v260 = new ArrayBuffer(1024);
    const v261 = new DataView(v260);
    const dv = v261;
    dv.setFloat32(0, 42, true);
    dv.setFloat32(4, 24, true);
    function foo(a272, a273) {
        const x = a272.getFloat32(a273, true);
        a272.setFloat32(a273, x + 1, true);
        return x;
    }
    foo(dv, 0);
    foo(dv, 4);
    foo(dv, 0);
    foo(dv, 4);
    foo(dv, 0);
    foo(dv, 4);
}
f256();
function f300() {
    const v304 = new ArrayBuffer(1024);
    const v305 = new DataView(v304);
    const dv = v305;
    dv.setFloat64(0, 42, true);
    dv.setFloat64(8, 24, true);
    function foo(a316, a317) {
        const x = a316.getFloat64(a317, true);
        a316.setFloat64(a317, x + 1, true);
        return x;
    }
    foo(dv, 0);
    foo(dv, 8);
    foo(dv, 0);
    foo(dv, 8);
    foo(dv, 0);
    foo(dv, 8);
}
f300();
