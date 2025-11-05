function TestCase(a1, a2) {
}
function reportCompare() {
    new TestCase();
}
const v6 = Object.prototype;
Object.defineProperty(v6, "name", {});
reportCompare();
try {
    function TestCase(a12, a13) {
        this.name = a12;
        this.description = a13;
    }
    reportCompare();
    reportCompare();
} catch(e18) {
}
