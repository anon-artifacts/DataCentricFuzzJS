function f0() {
}
var BUGNUMBER = 465567;
var summary = "TM: Weirdness with var, let, multiple assignments";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
expect = "99999";
for (let i13 = 0; i13 < 5; ++i13) {
    var e;
    e = 9;
    const v23 = "" + e;
    actual += v23;
    f0(v23);
    e = 47;
    if (e & 0) {
        let e;
    }
}
f0(expect, actual, summary);
