function testPrepareStackTrace(a1) {
    var error;
    try {
        a1();
    } catch(e5) {
        error = e5;
    }
    function f6(a7, a8) {
        return "bar";
    }
    Error.prepareStackTrace = f6;
    error.stack;
    Error.prepareStackTrace = undefined;
}
function f14() {
    const v17 = new Error("foo");
    throw v17;
}
testPrepareStackTrace(f14);
function f() {
    f();
}
testPrepareStackTrace(f);
