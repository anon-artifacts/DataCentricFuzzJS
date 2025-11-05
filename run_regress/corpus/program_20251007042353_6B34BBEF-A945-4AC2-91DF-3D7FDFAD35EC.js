function f0() {
    function bar(a2, a3) {
        return a2 + a3;
    }
    bar(0.1, 0.2);
    bar(0.1, 0.2);
    function foo(a12) {
        return bar(a12.getUint8(0, true), 4294967295);
    }
    const v21 = new ArrayBuffer(8);
    const v22 = new DataView(v21);
    const dv = v22;
    foo(dv);
    foo(dv);
    foo(dv);
}
f0();
function f31() {
    function bar(a33, a34) {
        return a33 + a34;
    }
    bar(0.1, 0.2);
    bar(0.1, 0.2);
    function foo(a43) {
        return bar(a43.getInt8(0, true), 4294967295);
    }
    const v52 = new ArrayBuffer(8);
    const v53 = new DataView(v52);
    const dv = v53;
    foo(dv);
    foo(dv);
    foo(dv);
}
f31();
function f62() {
    function bar(a64, a65) {
        return a64 + a65;
    }
    bar(0.1, 0.2);
    bar(0.1, 0.2);
    function foo(a74) {
        return bar(a74.getUint16(0, true), 4294967295);
    }
    const v83 = new ArrayBuffer(8);
    const v84 = new DataView(v83);
    const dv = v84;
    foo(dv);
    foo(dv);
    foo(dv);
}
f62();
function f93() {
    function bar(a95, a96) {
        return a95 + a96;
    }
    bar(0.1, 0.2);
    bar(0.1, 0.2);
    function foo(a105) {
        return bar(a105.getInt16(0, true), 4294967295);
    }
    const v114 = new ArrayBuffer(8);
    const v115 = new DataView(v114);
    const dv = v115;
    foo(dv);
    foo(dv);
    foo(dv);
}
f93();
