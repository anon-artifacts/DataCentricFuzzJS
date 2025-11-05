function testFloat32SetElemIC(a1) {
    for (let i3 = 0; i3 < a1.length; i3++) {
        var r = Math.fround(Math.random());
        a1[i3] = r;
    }
}
const v15 = new Array(2048);
testFloat32SetElemIC(v15);
const v19 = new Uint8ClampedArray(2048);
testFloat32SetElemIC(v19);
