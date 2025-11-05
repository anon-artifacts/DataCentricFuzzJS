function TestCase() {
    this.passed = "x";
}
result = "pass";
for (let i6 = 0; i6 < 100; i6++) {
    new TestCase(result);
}
function Gen2(a15) {
}
const v16 = new TestCase();
Gen2.prototype = v16;
