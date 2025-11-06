function f0() {
}
var BUGNUMBER = 469927;
var summary = "TM: jit should not slow down short loop with let";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function letitbe() {
        const v16 = new Date();
        var start = v16;
        for (let i19 = 0; i19 < 500000; ++i19) {
            for (let i26 = 0; i26 < 4; ++i26) {
            }
        }
        const v32 = new Date();
        var stop = v32;
        return stop - start;
    }
    var timenonjit = letitbe();
    var timejit = letitbe();
    f0((("time: nonjit = " + timenonjit) + ", jit = ") + timejit);
    f0(expect = true, actual = timejit < timenonjit, summary);
}
