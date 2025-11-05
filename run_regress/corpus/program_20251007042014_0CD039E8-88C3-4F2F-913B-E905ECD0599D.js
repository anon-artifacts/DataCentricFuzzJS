function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new Uint8Array(buffer);
    var view = v6;
    view[0] = 256;
    return view[0] === 0;
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
