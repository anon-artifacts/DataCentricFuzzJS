function f0() {
}
var BUGNUMBER = 363040;
var summary = "Array.prototype.reduce, Array.prototype.reduceRight";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f(a15, a16) {
        return ((("(" + a15) + "+") + a16) + ")";
    }
    var testdesc;
    var arr0elms = [];
    var arr1elms = [1];
    var arr2elms = [1,2];
    testdesc = "Test reduce of empty array without initializer.";
    try {
        expect = "TypeError: reduce of empty array with no initial value";
        arr0elms.reduce(f);
    } catch(e38) {
        actual = e38 + "";
    }
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduceRight of empty array without initializer.";
    try {
        expect = "TypeError: reduce of empty array with no initial value";
        arr0elms.reduceRight(f);
    } catch(e52) {
        actual = e52 + "";
    }
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduce of empty array with initial value.";
    expect = "a";
    actual = arr0elms.reduce(f, "a");
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduceRight of empty array with initial value.";
    expect = "a";
    actual = arr0elms.reduceRight(f, "a");
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduce of 1 element array with no initializer.";
    expect = "1";
    actual = arr1elms.reduce(f);
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduceRight of 1 element array with no initializer.";
    expect = "1";
    actual = arr1elms.reduceRight(f);
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduce of 2 element array with no initializer.";
    expect = "(1+2)";
    actual = arr2elms.reduce(f);
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduce of 2 element array with initializer.";
    expect = "((a+1)+2)";
    actual = arr2elms.reduce(f, "a");
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduceRight of 2 element array with no initializer.";
    expect = "(2+1)";
    actual = arr2elms.reduceRight(f);
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
    testdesc = "Test reduceRight of 2 element array with no initializer.";
    expect = "((a+2)+1)";
    actual = arr2elms.reduceRight(f, "a");
    f0(expect + "", actual + "", (testdesc + " : ") + expect);
}
