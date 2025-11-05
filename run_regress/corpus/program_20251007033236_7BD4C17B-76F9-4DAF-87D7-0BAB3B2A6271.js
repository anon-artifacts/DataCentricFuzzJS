function testClampInt() {
    var values = [-255,-254,-2,-1,0,1,2,128,254,255,256,300];
    var expected = [0,0,0,0,0,1,2,128,254,255,255,255];
    const v35 = new Uint8ClampedArray(100);
    var arr = v35;
    for (let i38 = 0; i38 < 10; i38++) {
        for (let i45 = 0; i45 < values.length; i45++) {
            const v51 = values[i45];
            arr[i45] = v51;
            arr[1] = v51;
            arr[1];
            arr[i45];
            arr[i45];
            expected[i45];
        }
    }
}
testClampInt();
function testClampDouble() {
    var values = [-255.1,-255,-2.1,-0,0,0.1,123.4,254.6,255,255.1,255.9,256,1234.5,NaN,-Infinity,Infinity];
    var expected = [0,0,0,0,0,0,123,255,255,255,255,255,255,0,0,255];
    const v100 = new Uint8ClampedArray(100);
    var arr = v100;
    for (let i103 = 0; i103 < 10; i103++) {
        for (let i110 = 0; i110 < values.length; i110++) {
            const v116 = values[i110];
            arr[i110] = v116;
            arr[1] = v116;
            arr[1];
            arr[i110];
            arr[i110];
            expected[i110];
        }
    }
}
testClampDouble();
function testClampValue() {
    var values = [null,123,256,267.9,-123.3,,Math,true,NaN,false];
    var expected = [0,123,255,255,0,0,0,1,0,0];
    const v150 = new Uint8ClampedArray(100);
    var arr = v150;
    for (let i153 = 0; i153 < 10; i153++) {
        for (let i160 = 0; i160 < values.length; i160++) {
            const v166 = values[i160];
            arr[i160] = v166;
            arr[1] = v166;
            arr[1];
            arr[i160];
            arr[i160];
            expected[i160];
        }
    }
}
testClampValue();
function testString() {
    const v175 = new Uint8ClampedArray(10);
    var arr = v175;
    for (let i178 = 0; i178 < 60; i178++) {
        arr[5] = (i178 & 1) == 0 ? "123.5" : 33;
        if ((i178 % 2) == 0) {
            arr[5];
        } else {
            arr[5];
        }
    }
}
