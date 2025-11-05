function f0() {
}
var UBound = 0;
var BUGNUMBER = "(none)";
var summary = "Testing scope with nested functions";
var statprefix = "Section ";
var statsuffix = " of test -";
var self = this;
var cnGlobal = self.toString();
const v16 = new Object();
var cnObject = v16.toString();
var statusitems = [];
var actualvalues = [];
var expectedvalues = [];
function a() {
    function b() {
        capture(this.toString());
    }
    function f31() {
        capture(this.toString());
        b();
    }
    this.c = f31;
    b();
}
const v39 = new a();
var obj = v39;
obj.c();
expectedvalues[0] = cnGlobal;
expectedvalues[1] = cnObject;
expectedvalues[2] = cnGlobal;
test();
function capture(a45) {
    actualvalues[UBound] = a45;
    statusitems[UBound] = getStatus(UBound);
    UBound++;
}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i53 = 0; i53 < UBound; i53++) {
        f0(expectedvalues[i53], actualvalues[i53], statusitems[i53]);
    }
}
function getStatus(a63) {
    return (statprefix + a63) + statsuffix;
}
