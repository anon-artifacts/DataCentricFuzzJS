function f0() {
}
var BUGNUMBER = "347674";
var summary = "ReferenceError thrown when accessing exception bound in a " + "catch block in a try block within that catch block";
var actual;
var expect;
f0(BUGNUMBER);
f0(summary);
var failed = false;
function foo() {
    try {
        throw "32.9";
    } catch(e17) {
        try {
            var errorCode = /^(\d+)\s+.*$/.exec(e17)[1];
        } catch(e22) {
            void ((("*** internal error: e == " + e17) + ", e2 == ") + e22);
            throw e22;
        }
    }
}
try {
    try {
        foo();
    } catch(e30) {
        if (!(e30 instanceof TypeError)) {
            throw (("Wrong value thrown!\n" + "  expected: a TypeError ('32.9' doesn't match the regexp)\n") + "  actual: ") + e30;
        }
    }
} catch(e40) {
    failed = e40;
}
f0(expect = false, actual = failed, summary);
