var BUGNUMBER = 369778;
var summary = "RegExpStatics::makeMatch should make an undefined value when the last " + "match had an undefined capture.";
print((BUGNUMBER + ": ") + summary);
var expected;
var actual;
const v15 = /x(.)?/g;
function f16(a17, a18) {
    actual = a18;
}
("x").replace(v15, f16);
print("expected: " + expected);
print("actual: " + actual);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
