function f0() {
}
const v3 = Symbol.toPrimitive;
var thrower = { [v3]: f0 };
function testTrace(a7) {
    try {
        a7(thrower);
    } catch(e9) {
        e9.stack.indexOf("fromCharCode") >= 0;
    }
}
testTrace(String.fromCharCode);
function foo(a19) {
    return String.fromCharCode(a19);
}
foo(1);
foo(2);
testTrace(foo);
testTrace(foo);
