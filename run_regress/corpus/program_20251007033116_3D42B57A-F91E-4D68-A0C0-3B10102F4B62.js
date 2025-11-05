{
    const v2 = new ArrayBuffer(10);
    let buffer = v2;
    const v5 = new DataView(buffer);
    let view = v5;
    if (view.byteOffset !== 0) {
        throw "byteoffest should be 0";
    }
    if (view.byteLength !== 10) {
        throw "byteLength should be 0";
    }
    if (view.buffer !== buffer) {
        throw "buffer should be the incomming buffer";
    }
    const v20 = new DataView(buffer, 1, 1);
    if ((view = v20).byteOffset !== 1) {
        throw "byteoffest should be 0";
    }
    if (view.byteLength !== 1) {
        throw "byteLength should be 0";
    }
    if (view.buffer !== buffer) {
        throw "buffer should be the incomming buffer";
    }
}
