function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new DataView(buffer);
    var view = v6;
    view.setInt8(0, 128);
    return view.getInt8(0) === -128;
}
if (!test()) {
    const v20 = new Error("Test failed");
    throw v20;
}
