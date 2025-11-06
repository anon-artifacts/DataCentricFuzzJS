var setterCalled = false;
function f3() {
    setterCalled = true;
}
Object.prototype.__defineSetter__("x", f3);
function runTest(a9) {
    setterCalled = false;
    a9();
}
function testProto() {
    try {
        throw 42;
    } catch(e14) {
    }
}
function testAccessorSetter() {
    try {
        throw 42;
    } catch(e18) {
    }
}
runTest(testProto);
runTest(testAccessorSetter);
