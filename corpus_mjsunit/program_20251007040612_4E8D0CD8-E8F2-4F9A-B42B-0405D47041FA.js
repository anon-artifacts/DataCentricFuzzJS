function testInt32Array(a1) {
    const v4 = new Int32Array(8);
    var f = v4;
    f[0];
    f[a1];
    f[a1 + 8];
    f[8];
    f[0] = 12;
    f[a1 + 1] = 13;
    f[2] = f[1];
    f[a1 + 3] = 4294967295;
    f[a1 + 4] = true;
    f[a1 + 5] = a1;
    f[0];
    f[1];
    f[2];
    f[3];
    -1;
    f[4];
    f[5];
}
function testUint32Array(a43) {
    const v46 = new Uint32Array(8);
    var f = v46;
    f[0];
    f[a43];
    f[a43 + 8];
    f[8];
    f[0] = 12;
    f[a43 + 1] = 13;
    f[2] = f[1];
    f[a43 + 3] = 4294967295;
    f[a43 + 4] = true;
    f[a43 + 5] = a43;
    f[0];
    f[1];
    f[2];
    f[3];
    f[4];
    f[5];
}
for (let i84 = 0; i84 < 10; i84++) {
    testUint32Array(0);
    if (i84 == 5) {
        gc();
    }
}
