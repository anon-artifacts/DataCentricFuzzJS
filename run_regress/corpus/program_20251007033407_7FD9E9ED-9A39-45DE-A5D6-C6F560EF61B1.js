function f0() {
    function foo(a2) {
        const i = a2 ? 4294967295 : 0;
        return i + 1;
    }
    foo(false);
    foo(false);
    foo(true);
    foo(true);
    foo(false);
    foo(true);
}
f0();
function f28() {
    function foo(a30) {
        const i = a30 ? 4294967295 : -1;
        return i + 1;
    }
    foo(false);
    foo(false);
    foo(true);
    foo(true);
    foo(false);
    foo(true);
}
f28();
function f57() {
    const v60 = new Float64Array(1);
    const a = v60;
    function foo(a63) {
        a[0] = a63.x + 4294967295;
        return a[0];
    }
    foo({ x: 0 });
    foo({ x: 1 });
    foo({ x: 1 });
}
f57();
function f81() {
    function foo(a83) {
        const v91 = Math.floor((a83.x + 11123456789) + -11123456788);
        return ({ x: v91 }).x;
    }
    foo({ x: 0 });
    foo({ x: 1 });
    foo({ x: 1 });
}
f81();
function f107() {
    function foo(a109, a110) {
        return a109[a110 = (a110 >>> 0) - 4294967295];
    }
    foo([1], 4294967295);
    foo([2], 4294967295);
    foo([3], 4294967295);
}
f107();
function f132() {
    function foo(a134) {
        const i = (a134 >>> 0) - 4294967295;
        return i;
    }
    foo(4294967295);
    foo(4294967295);
    foo(4294967295);
}
f132();
function f150() {
    function foo(a152, a153) {
        return a152.getInt8(a153 = a152.getFloat32(a153, true), true);
    }
    const v161 = new ArrayBuffer(10);
    const v162 = new DataView(v161);
    const dv = v162;
    dv.setFloat32(0, 8, true);
    dv.setFloat32(4, 9, true);
    dv.setInt8(8, 42);
    dv.setInt8(9, 24);
    foo(dv, 0);
    foo(dv, 4);
    foo(dv, 0);
    foo(dv, 4);
}
f150();
function f191() {
    function foo(a193, a194) {
        return a193.getInt8(a194 = a193.getFloat64(a194, true), true);
    }
    const v202 = new ArrayBuffer(18);
    const v203 = new DataView(v202);
    const dv = v203;
    dv.setFloat64(0, 16, true);
    dv.setFloat64(8, 17, true);
    dv.setInt8(16, 42);
    dv.setInt8(17, 24);
    foo(dv, 0);
    foo(dv, 8);
    foo(dv, 0);
    foo(dv, 8);
}
f191();
