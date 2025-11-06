function TestCase(a1) {
}
function reportCompare(a3) {
    TestCase(a3);
    try {
    } catch(e5) {
    }
}
function addThis(a7) {
    actualvalues[a7] = undefined + actual;
    reportCompare(actualvalues[a7]);
}
var actual = "";
var actualvalues = [];
addThis(0);
actual = NaN;
addThis(1);
