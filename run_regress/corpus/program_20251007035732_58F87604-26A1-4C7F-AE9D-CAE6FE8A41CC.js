const v2 = new Array(100);
var x = v2;
for (let i5 = 0; i5 < 100; i5++) {
    x[i5] = i5;
}
const v12 = new Array(100);
var y = v12;
for (let i15 = 0; i15 < 100; i15++) {
    y[i15] = i15;
}
const v22 = new Array(100);
var z = v22;
for (let i25 = 0; i25 < 100; i25++) {
    z[i25] = i25;
}
const v32 = new Array(100);
var u = v32;
for (let i35 = 0; i35 < 100; i35++) {
    u[i35] = i35;
}
function testBasic(a42, a43) {
    for (let i45 = 0; i45 < 100; i45++) {
        a42[i45] = a43[i45];
    }
}
testBasic(x, y);
function testChangedIndex(a54, a55) {
    for (let i57 = 0; i57 < 100;) {
        a54[i57] = a55[++i57];
    }
}
testChangedIndex(x, y);
function testLdSlot(a66) {
    const v68 = new Array(100);
    let src = v68;
    for (let i71 = 0; i71 < 100; ++i71) {
        src[i71] = i71;
    }
    for (let i78 = 0; i78 < 100; ++i78) {
        a66[i78] = src[i78];
    }
}
testLdSlot(x);
function testReverse(a87, a88) {
    for (let i90 = 100; i90 >= 5; i90--) {
        a87[i90] = a88[i90];
    }
}
testReverse(x, y);
function testMultipleMemcopy(a99, a100, a101, a102) {
    let results = [];
    for (let i106 = 0; i106 < 10; i106++) {
        const v112 = a102[i106];
        a101[i106] = v112;
        a100[i106] = v112;
        a99[i106] = v112;
    }
    results.push([a99,a100,a101]);
}
testMultipleMemcopy(x, y, z, u);
function preIncr(a117, a118) {
    let ri = -1;
    for (let i123 = 0; i123 < 10; ++i123) {
        const v129 = a118[ri];
        a117[++ri] = v129;
    }
}
preIncr(x, y);
function testNegativeStartIndex(a133, a134) {
    for (let i137 = -50; i137 < 10; i137++) {
        a133[i137] = a134[i137];
    }
}
testNegativeStartIndex(x, y);
function bug4468518(a146, a147) {
    let x = 0;
    for (let i151 = 0; i151 < 128; i151++) {
        let m = a147[i151];
        x += m;
        a146[i151] = m;
    }
    return x;
}
bug4468518(x, y);
