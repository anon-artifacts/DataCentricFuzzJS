function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new DataView(buffer);
    var view = v6;
    view.setFloat32(0, 0.1);
    return view.getFloat32(0) === 0.10000000149011612;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
