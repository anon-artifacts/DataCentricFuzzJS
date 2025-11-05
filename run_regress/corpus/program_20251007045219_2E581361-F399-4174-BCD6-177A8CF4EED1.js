function testFloat32SetElemIC(a1) {
    for (let i3 = 0; i3 < a1.length; i3++) {
        var r = Math.fround(Math.random());
        a1[i3] = r;
        a1[i3];
    }
}
function testCompoundClamping(a15, a16) {
    for (let i18 = 0; i18 < a15.length; i18++) {
        var r = Math.random();
        a16[i18] = r;
        a15[i18] = r;
        a15[i18];
        a16[i18];
    }
}
const v31 = new Array(2048);
testFloat32SetElemIC(v31);
const v35 = new Float64Array(2048);
testFloat32SetElemIC(v35);
const v39 = new Float32Array(2048);
testFloat32SetElemIC(v39);
const v42 = new Array(2048);
const v44 = new Array(2048);
testCompoundClamping(v42, v44);
const v48 = new Uint8Array(2048);
const v50 = new Uint8Array(2048);
testCompoundClamping(v48, v50);
const v54 = new Uint8ClampedArray(2048);
const v56 = new Uint8ClampedArray(2048);
testCompoundClamping(v54, v56);
