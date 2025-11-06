function f0() {
}
var BUGNUMBER = 293782;
var summary = "Local variables can cause predefined function object properties to be undefined";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function f() {
    var name = 1;
}
f0(expect = "f", actual = f.name, summary);
