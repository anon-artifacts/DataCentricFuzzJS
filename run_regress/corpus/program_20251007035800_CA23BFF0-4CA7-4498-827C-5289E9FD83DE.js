console.log("This test checks corner cases of the number cell reuse code. In particular, it checks for known cases where code generation for number cell reuse caused assertions to fail.");
function leftConstantRightSimple(a4) {
    return 0.1 * (a4 * a4);
}
leftConstantRightSimple(2);
function leftConstantRightComplex(a11) {
    return 0.1 * ((a11 * a11) + a11);
}
leftConstantRightComplex(1);
function leftSimpleRightConstant(a19) {
    return (a19 * a19) * 0.1;
}
leftSimpleRightConstant(2);
function leftComplexRightConstant(a26) {
    return ((a26 * a26) + a26) * 0.1;
}
leftComplexRightConstant(1);
function leftThisRightSimple(a34) {
    return this * (a34 * a34);
}
leftThisRightSimple(2);
leftThisRightSimple.call(2, 2);
function leftThisRightComplex(a44) {
    return this * ((a44 * a44) + a44);
}
leftThisRightComplex(2);
leftThisRightComplex.call(2, 2);
function leftSimpleRightThis(a55) {
    return (a55 * a55) * this;
}
leftSimpleRightThis(2);
leftSimpleRightThis.call(2, 2);
function leftComplexRightThis(a65) {
    return ((a65 * a65) + a65) * this;
}
leftComplexRightThis(2);
leftComplexRightThis.call(2, 2);
