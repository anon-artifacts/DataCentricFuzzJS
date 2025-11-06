function test0() {
    var GiantPrintArray = [];
    const v6 = new Array(1, 1);
    var IntArr0 = v6;
    var FloatArr0 = [];
    FloatArr0[1] = 1;
    FloatArr0[0] = 1;
    FloatArr0[12] = 1;
    var v5;
    v5 = IntArr0.length;
    for (let i17 = 0; i17 < v5; i17++) {
        FloatArr0[i17] = IntArr0[i17];
    }
    GiantPrintArray.push(FloatArr0);
    for (let i25 = 0; 0 < GiantPrintArray;) {
    }
}
test0();
test0();
test0();
print("passed");
