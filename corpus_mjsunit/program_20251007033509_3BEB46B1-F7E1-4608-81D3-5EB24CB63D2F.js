console.log("Regression test for https://webkit.org/b/140306. This test should run without any exceptions.");
const v7 = new Number(3);
testArgs = [1,"Second",v7];
function checkArgs(a11, a12, a13) {
    if (a11 !== testArgs[0]) {
        throw (("Value of declared arg a0 is wrong.  Should be: " + testArgs[0]) + ", was: ") + a11;
    }
    if (a12 !== testArgs[1]) {
        throw (("Value of declared arg a1 is wrong.  Should be: " + testArgs[1]) + ", was: ") + a12;
    }
    if (a13 !== testArgs[2]) {
        throw (("Value of declared arg a2 is wrong.  Should be: " + testArgs[2]) + ", was: ") + a13;
    }
    if (arguments.length != 3) {
        throw "Length of arguments is wrong.  Should be: 3, was: " + arguments.length;
    }
    for (let i48 = 0; i48 < arguments.length; i48++) {
        if (arguments[i48] !== testArgs[i48]) {
            throw (((("Value of arguments[" + i48) + "] is wrong.  Should be: ") + testArgs[i48]) + ", was: ") + arguments[i48];
        }
    }
}
function applyToArgs() {
    arguments = testArgs;
    checkArgs.apply(this, arguments);
    try {
    } catch(e76) {
        throw e76;
    }
}
applyToArgs(42);
