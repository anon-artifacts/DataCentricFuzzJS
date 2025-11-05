function f0() {
}
function f4() {
    return 12;
}
class C5 extends f0 {
    constructor(a7, a8) {
        super();
        f4();
        %PrepareFunctionForOptimization(f4);
        f4();
        f4();
        %OptimizeMaglevOnNextCall(f4);
        f4();
    }
    129 = 12;
    c;
    #h;
}
new C5(10, 9007199254740990);
new C5(10, 9007199254740990);
new C5(10, 9007199254740990);
new Float64Array(512);
new Float32Array(4096);
new Float64Array(64);
function test0() {
    var GiantPrintArray = [];
    const v34 = new Array(1, 1);
    var IntArr0 = v34;
    var FloatArr0 = [];
    FloatArr0[1] = 1;
    FloatArr0[0] = 1;
    FloatArr0[12] = 1;
    var v5;
    const v43 = IntArr0.length;
    Array[Symbol.hasInstance];
    const v48 = %WasmStruct();
    v5 = v43;
    for (let i50 = 0; i50 < v5; i50++) {
        FloatArr0[i50] = IntArr0[i50];
    }
    GiantPrintArray.push(FloatArr0);
    for (let i58 = 0; 0 < GiantPrintArray;) {
    }
}
test0();
test0();
test0();
print("passed");
