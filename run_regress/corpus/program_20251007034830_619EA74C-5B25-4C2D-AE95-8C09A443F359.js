function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new DataView(buffer);
    var view = v6;
    view.setUint16(0, 65536);
    return view.getUint16(0) === 0;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
