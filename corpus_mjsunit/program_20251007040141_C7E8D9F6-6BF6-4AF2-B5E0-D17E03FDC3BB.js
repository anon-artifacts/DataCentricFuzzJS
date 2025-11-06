function f0() {
}
function f2() {
}
var thrower = { valueOf: f0, toString: f2 };
function testTraceNativeConstructor(a7) {
    var nativeFuncName = a7.name;
    try {
        new a7(thrower);
    } catch(e11) {
        e11.stack.indexOf(nativeFuncName) >= 0;
    }
}
function testTraceNativeConversion(a17) {
    var nativeFuncName = a17.name;
    try {
        a17(thrower);
    } catch(e21) {
        e21.stack.indexOf(nativeFuncName) >= 0;
    }
}
testTraceNativeConversion(String);
testTraceNativeConversion(RegExp);
testTraceNativeConstructor(String);
testTraceNativeConstructor(RegExp);
