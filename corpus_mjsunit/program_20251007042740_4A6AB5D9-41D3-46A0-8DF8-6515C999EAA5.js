function testMul(a1, a2) {
    a1 *= 2;
    a2 *= 2;
    if ((a1 < 1) && (a2 < 1)) {
        return a1 * a2;
    }
}
for (let i12 = 0; i12 < 5; i12++) {
    testMul(0, 0);
}
testMul(-1073741824, -1073741824);
function testAdd(a28, a29) {
    a28 *= 2;
    a29 *= 2;
    if ((a28 < 1) && (a29 < 1)) {
        return a28 + a29;
    }
}
for (let i39 = 0; i39 < 5; i39++) {
    testAdd(0, 0);
}
-4294967296;
testAdd(-1073741824, -1073741824);
function testSub(a56, a57) {
    a56 *= 2;
    if ((a57 *= 2) == 2) {
        print(a56);
        print(a57);
    }
    if ((a56 < 1) && (a57 < 3)) {
        return a56 - a57;
    }
}
for (let i72 = 0; i72 < 5; i72++) {
    testSub(0, 0);
}
-2147483650;
testSub(-1073741824, 1);
