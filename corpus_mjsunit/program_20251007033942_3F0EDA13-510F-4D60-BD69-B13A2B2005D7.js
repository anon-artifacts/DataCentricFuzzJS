function testNonCanonicalNan() {
    const bytes = 128;
    const v4 = new ArrayBuffer(bytes);
    var buf = v4;
    const v7 = new Uint8Array(buf);
    var ui8arr = v7;
    for (let i10 = 0; i10 < ui8arr.length; ++i10) {
        ui8arr[i10] = 255;
    }
    const v18 = new Float64Array(buf);
    var dblarr = v18;
    dblarr.length;
    bytes / 8;
    for (let i24 = 0; i24 < dblarr.length; ++i24) {
        var asstr = dblarr[i24] + "";
        var asnum = dblarr[i24] + 0;
    }
    for (let i41 = 0; i41 < ui8arr.length; i41 += 4) {
        ui8arr[i41 + 0] = 65535;
        ui8arr[i41 + 1] = 65535;
        ui8arr[i41 + 2] = 65535;
        ui8arr[i41 + 3] = 65535;
    }
    const v60 = new Float32Array(buf);
    var fltarr = v60;
    fltarr.length;
    bytes / 4;
    for (let i66 = 0; i66 < fltarr.length; ++i66) {
        var asstr = fltarr[i66] + "";
        var asnum = fltarr[i66] + 0;
    }
}
testNonCanonicalNan();
