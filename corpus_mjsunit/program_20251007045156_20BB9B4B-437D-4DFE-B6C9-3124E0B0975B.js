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
        res += ((arr1[i25 + ""] + arr2[i25 + ""]) + arr3[i25 + ""]) + arr2[("10").concat("")];
    }
}
testInt8();
function testInt16() {
    const v52 = new Int16Array(70);
    var arr1 = v52;
    const v56 = new Uint16Array(70);
    var arr2 = v56;
    for (let i59 = 0; i59 < arr1.length; i59++) {
        const v66 = i59 * 1000;
        arr2[i59] = v66;
        arr1[i59] = v66;
    }
    var res = 0;
    for (let i70 = 0; i70 < arr1.length; i70++) {
        res += ((arr1[i70 + ""] + arr2[i70 + ""]) + arr2[("1").concat("")]) + arr1[("3").concat("")];
    }
}
testInt16();
function testInt32() {
    const v98 = new Int32Array(60);
    var arr = v98;
    arr[0] = -50;
    for (let i103 = 1; i103 < arr.length; i103++) {
        arr[i103] = arr[(i103 - 1) + ""] + arr[("0").concat("")];
        let v119 = arr[0];
        ++v119;
    }
    arr[(arr.length - 1) + ""];
    -1289;
}
testInt32();
function testUint32() {
    function sum(a132) {
        var res = 0;
        for (let i136 = 0; i136 < a132.length; i136++) {
            res += a132[i136 + ""];
        }
        return res;
    }
    const v147 = new Uint32Array(100);
    var arr = v147;
    for (let i150 = 0; i150 < arr.length; i150++) {
        arr[i150] = i150;
    }
    sum(arr);
    arr[50] = 4294962926;
    sum(arr);
}
testUint32();
function testFloat() {
    const v165 = new Float32Array(75);
    var arr1 = v165;
    const v169 = new Float64Array(75);
    var arr2 = v169;
    const v174 = Math.PI * 1234567.8;
    arr2[0] = v174;
    arr1[0] = v174;
    for (let i176 = 1; i176 < 75; i176++) {
        arr1[i176] = arr1[(i176 - 1) + ""] + arr1[0];
        arr2[i176] = arr2[(i176 - 1) + ""] + arr2[0];
    }
    arr1[("74").concat("")] > 290888255;
    arr1[("74").concat("")] < 290888257;
    arr2[("74").concat("")] > 290888184;
    arr2[("74").concat("")] < 290888185;
}
testFloat();
function testCanonicalNaN() {
    const v228 = new ArrayBuffer(16);
    var buf = v228;
    const v231 = new Uint32Array(buf);
    var uint32 = v231;
    const v234 = new Float64Array(buf);
    var f64 = v234;
    const v237 = new Float32Array(buf);
    var f32 = v237;
    uint32[0] = 4294967175;
    uint32[1] = 4294967175;
    for (let i242 = 0; i242 < 3; i242++) {
        isNaN(f64[("0").concat("")]);
        isNaN(f32[("0").concat("")]);
    }
}
testCanonicalNaN();
function testOutOfBounds() {
    const v265 = new ArrayBuffer(16);
    var buf = v265;
    const v268 = new Uint32Array(buf);
    var uint32 = v268;
    uint32[0] = 0;
    uint32[1] = 1;
    for (let i273 = 0; i273 < 3; i273++) {
        uint32[("0").concat("")];
        uint32[("1").concat("")];
        uint32[("2").concat("")];
        uint32[("17").concat("")];
    }
}
testOutOfBounds();
function testStrangeIndexes() {
    const v303 = new ArrayBuffer(16);
    var buf = v303;
    const v306 = new Uint32Array(buf);
    var uint32 = v306;
    uint32[0] = 0;
    uint32[1] = 1;
    indexes = ["0","1","2","3","17","3.5","NaN","undefined","null"];
    solutions = [0,1,0,0,,,,,,];
    for (let i333 = 0; i333 < indexes.length; i333++) {
        uint32[indexes[i333]];
        solutions[i333];
    }
}
testStrangeIndexes();
