function TestCase(a1, a2, a3, a4) {
    this.expect = a3;
    this.passed = getTestCaseResult(this.expect, this.actual);
}
function getTestCaseResult(a14, a15) {
}
new TestCase(TestCase(3000000000.5));
new TestCase(null, null, String(("Sally and Fred are sure to come").match(/^[a-z\s]*/i)));
