function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new Int8Array(buffer);
    var view = v6;
    view[0] = 128;
    return view[0] === -128;
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
