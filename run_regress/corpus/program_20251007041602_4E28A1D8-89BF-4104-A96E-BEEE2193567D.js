function f0() {
}
var BUGNUMBER = 328664;
var summary = "Correct error message for funccall(undefined, undefined.prop)";
var actual = "";
var expect = /TypeError: value.parameters (has no properties|is undefined)/;
f0(BUGNUMBER);
f0(summary);
var value = {};
function funccall(a14, a15) {
}
try {
    funccall(value[1], value.parameters[1]);
} catch(e20) {
    f0(e20);
    actual = e20 + "";
}
f0(expect, actual, summary);
