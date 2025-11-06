function f0() {
}
var BUGNUMBER = 451974;
var summary = "TM: loops with anon functions should not be slower with jit enabled";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var chars = "0123456789abcdef";
var size = 10000;
var mult = 1000;
var densearray = [];
var lsize = size;
while (lsize--) {
    densearray.push(chars);
}
function loop() {
    const v24 = new Date();
    var start = v24;
    for (let i27 = 0; i27 < mult; i27++) {
        function f32(a33) {
        }
        var f = f32;
        for (let i37 = 0, i38 = densearray.length; i37 < i38; i37++) {
            f(densearray[i37]);
        }
    }
    const v47 = new Date();
    var stop = v47;
    return stop - start;
}
var timenonjit = loop();
var timejit = loop();
f0((("time: nonjit = " + timenonjit) + ", jit = ") + timejit);
f0(expect = true, actual = timejit < (timenonjit / 2), summary);
