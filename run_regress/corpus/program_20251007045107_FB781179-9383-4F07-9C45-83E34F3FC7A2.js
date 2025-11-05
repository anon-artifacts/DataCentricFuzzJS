function testUndefinedLeftHandSide() {
    undefined | 1;
    undefined & 1;
    undefined ^ 1;
    undefined << 1;
    undefined >> 1;
    undefined >>> 1;
}
function testUndefinedRightHandSide() {
    1 | undefined;
    1 & undefined;
    1 ^ undefined;
    1 << undefined;
    1 >> undefined;
    1 >>> undefined;
}
testUndefinedLeftHandSide();
testUndefinedRightHandSide();
