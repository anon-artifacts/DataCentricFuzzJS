function TestCase() {
}
function reportCompare() {
    var output = "";
    let v4;
    try { v4 = new TestCase(); } catch (e) {}
    var testcase = v4;
    testcase.reason = output;
}
try { reportCompare(); } catch (e) {}
try { gczeal(4, 1000); } catch (e) {}
for (let i12 = 0; i12 < 10000; ++i12) {
    try { reportCompare(); } catch (e) {}
}
