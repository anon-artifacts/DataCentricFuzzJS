function TestCase(a1, a2, a3, a4) {
    function f5() {
    }
    const t3 = TestCase.prototype;
    t3.dump = f5;
    return f5;
}
const v8 = new Number();
new TestCase(typeof Number(v8));
const v13 = new Number(Number.NaN);
new TestCase(typeof Number(v13));
test();
function test() {
    try {
        test();
    } catch(e21) {
        new TestCase();
    }
}
