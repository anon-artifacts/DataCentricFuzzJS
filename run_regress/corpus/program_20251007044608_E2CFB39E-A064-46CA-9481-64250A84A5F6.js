function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new DataView(buffer);
    var view = v6;
    view.setFloat64(0, 0.1);
    return view.getFloat64(0) === 0.1;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
