function AddTestCase(a1, a2) {
    new TestCase(a1, a2);
}
function TestCase(a6, a7) {
    this.expect = a6;
    getTestCaseResult(a6, a7);
}
function getTestCaseResult(a12, a13) {
    if (a13 != a12) {
    }
}
AddRegExpCases(false, Math.pow(2, 31));
AddRegExpCases("", Math.pow(2, 30) - 1);
function AddRegExpCases(a30, a31) {
    AddTestCase("");
    AddTestCase(a30, true);
    AddTestCase(a31, 0);
}
