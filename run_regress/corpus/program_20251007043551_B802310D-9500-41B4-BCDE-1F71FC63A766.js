function TestCase(a1, a2, a3, a4) {
    this.name = a1;
    this.description = a2;
}
function reportCompare(a8, a9, a10) {
    new TestCase();
}
var actual = "";
var expect = "";
for (let i17 = 0; i17 < 2; ++i17) {
    reportCompare(expect, actual, ": 2");
}
try {
    { valueOf: gc } - [];
} catch(e29) {
}
function addThis() {
    return reportCompare(expect, actual, "ok");
}
const v34 = Object.prototype;
function f36(a37) {
}
Object.defineProperty(v34, "name", { set: f36 });
addThis();
