function TestCase(a1, a2, a3, a4) {
    this.name = a1;
    return a1;
}
function reportCompare(a7, a8, a9) {
    new TestCase();
}
reportCompare(true, "isGenerator" in Function, "Function.prototype.isGenerator present");
const v18 = {};
const v20 = new Proxy(v18, {});
var p = v20;
function test() {
    const t12 = TestCase.prototype;
    t12.__proto__ = null;
    const v25 = new TestCase();
    if (v25) {
        const t16 = TestCase.prototype;
        t16.__proto__ = p;
    }
}
test();
new TestCase();
test();
