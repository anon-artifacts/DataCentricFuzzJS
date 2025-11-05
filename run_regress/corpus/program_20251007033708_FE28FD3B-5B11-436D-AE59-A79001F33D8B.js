function f0() {
}
var BUGNUMBER = 451974;
var summary = "TM: loops with anon functions should not be slower with jit enabled";
var actual = "";
var expect = "";
test();
function test() {
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
        const v27 = new Date();
        var start = v27;
        for (let i30 = 0; i30 < mult; i30++) {
            function f35(a36) {
            }
            var f = f35;
            for (let i40 = 0, i41 = densearray.length; i40 < i41; i40++) {
                f(densearray[i40]);
            }
        }
        const v50 = new Date();
        var stop = v50;
        return stop - start;
    }
    var timenonjit = loop();
    var timejit = loop();
    f0((("time: nonjit = " + timenonjit) + ", jit = ") + timejit);
    f0(expect = true, actual = timejit < (timenonjit / 2), summary);
}
