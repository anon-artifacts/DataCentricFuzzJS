function TestCase(a1, a2, a3, a4) {
    this.expect = a3;
    return a3;
}
function reportCompare(a7, a8, a9) {
    typeof a8;
}
expect = 1;
var summary = "Do not assert: top < ss->printer->script->depth";
var actual = "No Crash";
var expect = "No Crash";
test();
function notInlined(a22) {
    with ({}) {
    }
    return a22;
}
function test(a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a50) {
    try {
        function f51(a52) {
            return test();
        }
        const v54 = notInlined(f51);
        a40 = ([1]).some(v54) ? 4 : 65;
    } catch(e61) {
    }
    reportCompare(expect, actual, summary);
}
test();
TestCase();
test();
