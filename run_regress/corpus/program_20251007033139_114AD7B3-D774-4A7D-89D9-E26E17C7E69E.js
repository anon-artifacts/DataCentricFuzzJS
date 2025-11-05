function f0() {
    var result = 0;
    const v6 = new ArrayBuffer(5);
    const v7 = new DataView(v6);
    var d = v7;
    for (let i10 = 0; i10 < 1000000; i10++) {
        d.setInt8(0, 4);
        d.setInt8(1, 2);
        d.setInt8(2, 6);
        d.setInt16(0, 20);
        result += d.getInt8(2) + d.getInt8(0);
    }
    if (result != 6000000) {
        throw "Bad result: " + result;
    }
}
f0();
