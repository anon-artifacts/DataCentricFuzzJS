function TestCase(a1, a2) {
    try { getTestCaseResult(a1, a2); } catch (e) {}
}
function reportCompare(a6, a7) {
    try { new TestCase(a6, a7); } catch (e) {}
}
function enterFunc() {
}
function getTestCaseResult(a11, a12) {
    return a12 == a11;
}
try { reportCompare("", ""); } catch (e) {}
try { evaluate("test();function test() {  enterFunc();  reportCompare();}"); } catch (e) {}
