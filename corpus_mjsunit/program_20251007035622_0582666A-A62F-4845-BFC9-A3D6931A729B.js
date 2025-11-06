function testFloat32SetElemIC(a1) {
    for (let i3 = 0; i3 < a1.length; i3++) {
        var r = Math.fround(Math.random());
        a1[i3] = r;
        a1[i3];
    }
}
const v16 = new Array(2048);
testFloat32SetElemIC(v16);
const v19 = new Array(2048);
testFloat32SetElemIC(v19);
const v22 = new Array(2048);
testFloat32SetElemIC(v22);
const v26 = new Float64Array(2048);
testFloat32SetElemIC(v26);
