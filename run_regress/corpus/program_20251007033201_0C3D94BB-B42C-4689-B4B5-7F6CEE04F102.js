const v1 = new Array();
var gTestcases = v1;
var gTc = gTestcases.length;
var setterCalled = false;
function TestCase() {
    gTestcases[gTc++] = this;
}
for (let i11 = 0; i11 < 13; ++i11) {
    const v17 = new TestCase();
    var testcase = v17;
}
function f20() {
    setterCalled = true;
}
Array.prototype.__defineSetter__(32, f20);
for (let i25 = 0; i25 < 20; ++i25) {
    const v31 = new TestCase();
    var testcase = v31;
}
