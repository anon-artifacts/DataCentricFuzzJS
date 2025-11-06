var t = 1;
function testFalseLeftHandSide() {
    var b;
    if (t) {
        b = false;
    }
    b | 1;
    b & 1;
    b ^ 1;
    b << 1;
    b >> 1;
    b >>> 1;
}
function testFalseRightHandSide() {
    if (t) {
        b = false;
    }
    1 | b;
    1 & b;
    1 ^ b;
    1 << b;
    1 >> b;
    1 >>> b;
}
function testTrueLeftHandSide() {
    if (t) {
        b = true;
    }
    b | 1;
    b & 1;
    b ^ 1;
    b << 1;
    b >> 1;
    b >>> 1;
}
function testTrueRightHandSide() {
    if (t) {
        b = true;
    }
    1 | b;
    1 & b;
    1 ^ b;
    1 << b;
    1 >> b;
    1 >>> b;
}
function testBothSides() {
    if (t) {
        a = true;
    }
    if (t) {
        b = false;
    }
    a | b;
    a & b;
    a ^ b;
    a << b;
    a >> b;
    a >>> b;
}
testFalseLeftHandSide();
testFalseRightHandSide();
testTrueLeftHandSide();
testTrueRightHandSide();
testFalseLeftHandSide();
testFalseRightHandSide();
testTrueLeftHandSide();
testTrueRightHandSide();
testBothSides();
testBothSides();
