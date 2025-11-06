function test() {
    const v3 = new ArrayBuffer(64);
    var buffer = v3;
    const v6 = new Float32Array(buffer);
    var view = v6;
    view[0] = 0.1;
    return view[0] === 0.10000000149011612;
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
