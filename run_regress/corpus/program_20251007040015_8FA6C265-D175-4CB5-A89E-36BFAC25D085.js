function f0() {
    let v1 = 0;
    const v5 = new ArrayBuffer(5);
    const v6 = new DataView(v5);
    for (let i8 = 0; i8 < 1000000; i8++) {
        v6.setInt8(0, 4);
        v6.setInt8(1, 2);
        v6.setInt16(0, 20);
        v1 += v6.getInt8(2) + v6.getInt8();
    }
}
f0();
