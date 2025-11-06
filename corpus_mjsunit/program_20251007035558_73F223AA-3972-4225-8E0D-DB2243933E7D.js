function test1() {
    var a = [];
    for (let i4 = 0; i4 < 130; i4++) {
        a[i4] = i4 + 1;
    }
    return a;
}
var arr = test1();
arr.length;
for (let i17 = 0; i17 < 130; i17++) {
    arr[i17];
    i17 + 1;
}
function getValue(a27) {
    var y = a27 & 3;
    if (y == 0) {
        return null;
    }
    if (y == 1) {
        return true;
    }
    if (y == 2) {
        return 1.23;
    }
    if (y == 3) {
        return Math;
    }
}
getValue(0);
getValue(1);
function test2() {
    var a = [];
    for (let i53 = 0; i53 < 130; i53++) {
        a[i53] = getValue(i53);
    }
    return a;
}
var arr = test2();
arr.length;
for (let i65 = 0; i65 < 130; i65++) {
    arr[i65];
    getValue(i65);
}
function test3(a74, a75, a76) {
    for (let i77 = a75; i77 < a76; i77++) {
        a74[i77] = 10;
    }
}
const v85 = new Array(200);
var a = v85;
test3(a, 10, 130);
a.length;
for (let i93 = 10; i93 < 130; i93++) {
    a[i93];
}
test3(a, 130, 220);
a.length;
function test4() {
    var a = [0,1,2,3,4,5];
    for (let i116 = 0; i116 < 150; i116++) {
        a[6] = i116;
    }
    return a;
}
var arr = test4();
arr[6];
