function testInt8() {
    const v3 = new Int8Array(50);
    var arr1 = v3;
    const v7 = new Uint8Array(50);
    var arr2 = v7;
    const v11 = new Uint8ClampedArray(50);
    var arr3 = v11;
    for (let i14 = 0; i14 < arr1.length; i14++) {
        const v21 = i14 * 8;
        arr3[i14] = v21;
        arr2[i14] = v21;
        arr1[i14] = v21;
    }
    var res = 0;
    for (let i25 = 0; i25 < arr1.length; i25++) {
        res += ((arr1[i25] + arr2[i25]) + arr3[i25]) + arr2[10];
    }
}
testInt8();
function testInt16() {
    const v43 = new Int16Array(70);
    var arr1 = v43;
    const v47 = new Uint16Array(70);
    var arr2 = v47;
    for (let i50 = 0; i50 < arr1.length; i50++) {
        const v57 = i50 * 1000;
        arr2[i50] = v57;
        arr1[i50] = v57;
    }
    var res = 0;
    for (let i61 = 0; i61 < arr1.length; i61++) {
        res += ((arr1[i61] + arr2[i61]) + arr2[1]) + arr1[3];
    }
}
testInt16();
function testInt32() {
    const v79 = new Int32Array(60);
    var arr = v79;
    arr[0] = -50;
    for (let i84 = 1; i84 < arr.length; i84++) {
        arr[i84] = arr[i84 - 1] + arr[0];
        let v95 = arr[0];
        ++v95;
    }
    arr[arr.length - 1];
    -1289;
}
testInt32();
function testUint32() {
    function sum(a106) {
        var res = 0;
        for (let i110 = 0; i110 < a106.length; i110++) {
            res += a106[i110];
        }
        return res;
    }
    const v119 = new Uint32Array(100);
    var arr = v119;
    for (let i122 = 0; i122 < arr.length; i122++) {
        arr[i122] = i122;
    }
    sum(arr);
    arr[50] = 4294962926;
    sum(arr);
}
testUint32();
function testFloat() {
    const v137 = new Float32Array(75);
    var arr1 = v137;
    const v141 = new Float64Array(75);
    var arr2 = v141;
    const v146 = Math.PI * 1234567.8;
    arr2[0] = v146;
    arr1[0] = v146;
    for (let i148 = 1; i148 < 75; i148++) {
        arr1[i148] = arr1[i148 - 1] + arr1[0];
        arr2[i148] = arr2[i148 - 1] + arr2[0];
    }
    arr1[74] > 290888255;
    arr1[74] < 290888257;
    arr2[74] > 290888184;
    arr2[74] < 290888185;
}
testFloat();
function testCanonicalNaN() {
    const v184 = new ArrayBuffer(16);
    var buf = v184;
    const v187 = new Uint32Array(buf);
    var uint32 = v187;
    const v190 = new Float64Array(buf);
    var f64 = v190;
    const v193 = new Float32Array(buf);
    var f32 = v193;
    uint32[0] = 4294967175;
    uint32[1] = 4294967175;
    for (let i198 = 0; i198 < 100; i198++) {
        isNaN(f64[0]);
        isNaN(f32[0]);
    }
}
testCanonicalNaN();
