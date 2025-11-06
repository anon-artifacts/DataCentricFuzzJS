function f1() {
    print("Hello from arbitrary JS");
}
Array.prototype.__defineSetter__(32, f1);
var UBound = 0;
var expect = "";
var expectedvalues = [];
for (let i15 = 0; i15 < 10; i15++) {
    addThis();
    addThis();
    addThis();
    addThis();
}
function addThis() {
    expectedvalues[UBound] = expect;
    UBound++;
}
