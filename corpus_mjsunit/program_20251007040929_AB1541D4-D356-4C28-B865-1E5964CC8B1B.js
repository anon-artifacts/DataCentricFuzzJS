function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new DataView(buffer);
    var view = v6;
    view.setInt16(0, 32768);
    return view.getInt16(0) === -32768;
}
if (!test()) {
    const v20 = new Error("Test failed");
    throw v20;
}
