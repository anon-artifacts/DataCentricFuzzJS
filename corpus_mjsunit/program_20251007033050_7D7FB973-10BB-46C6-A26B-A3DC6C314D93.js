function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new DataView(buffer);
    var view = v6;
    view.setUint32(0, 4294967296);
    return view.getUint32(0) === 0;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
