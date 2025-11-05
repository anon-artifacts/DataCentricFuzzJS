function f0() {
}
var BUGNUMBER = 452703;
var summary = "Do not assert with JIT: rmask(rr)&FpRegs";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function f11() {
    for (let v18 in [0,1,2,3,4]) {
        v18 = NaN;
    }
}
f11();
f0(expect, actual, summary);
