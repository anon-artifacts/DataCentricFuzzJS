function f0() {
}
var BUGNUMBER = 334807;
var summary = "10.1.8 - arguments prototype is the original Object prototype";
var actual = "No Error";
var expect = "TypeError";
f0(BUGNUMBER);
f0(summary);
try {
    function f15() {
        f0(arguments.join());
    }
    f15(1, 2, 3);
} catch(e20) {
    f0(e20 + "");
    actual = e20.name;
}
f0(expect, actual, summary);
