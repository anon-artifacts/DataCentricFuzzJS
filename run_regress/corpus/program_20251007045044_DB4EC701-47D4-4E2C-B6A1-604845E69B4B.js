function f0() {
}
var BUGNUMBER = 367589;
var summary = "Do not assert !SPROP_HAS_STUB_SETTER(sprop) || (sprop->attrs & JSPROP_GETTER)";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    gDelayTestDriverEnd = true;
}
function crash() {
    setTimeout(checkCrash, 0);
}
function checkCrash() {
    gDelayTestDriverEnd = false;
    f0(expect, actual, summary);
}
