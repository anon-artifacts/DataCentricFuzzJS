function f0() {
}
var BUGNUMBER = 342359;
var summary = "Overriding ReferenceError should stick";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var SavedReferenceError = ReferenceError;
try {
    ReferenceError = 5;
} catch(e14) {
}
try {
    foo.blitz;
} catch(e17) {
}
if (SavedReferenceError == ReferenceError) {
    expect = "Test ignored due to bug 376957";
    actual = "Test ignored due to bug 376957";
} else {
    expect = 5;
    actual = ReferenceError;
}
f0(expect, actual, summary);
