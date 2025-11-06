function f0() {
}
var BUGNUMBER = 353078;
var summary = "Do not assert with bogus toString, map, split";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        function f14() {
            return {};
        }
        this.toString = f14;
        const v18 = ("foo").split;
        p = ([11]).map(v18);
    } catch(e23) {
    }
    f0(expect, actual, summary);
}
