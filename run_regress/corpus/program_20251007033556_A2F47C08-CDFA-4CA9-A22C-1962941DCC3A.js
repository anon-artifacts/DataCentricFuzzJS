function f0() {
}
var BUGNUMBER = 237461;
var summary = "don't crash with nested function collides with var";
var actual = "Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function g() {
    var core = {};
    core.js = {};
    function f15() {
        var loader = null;
        function loader() {
        }
    }
    const t16 = core.js;
    t16.init = f15;
    return core;
}
if (typeof Script == "undefined") {
    f0("Test skipped. Script not defined.");
} else {
    const v29 = new Script("" + g.toString());
    var s = v29;
    try {
        var frozen = s.freeze();
        f0("len:" + frozen.length);
    } catch(e37) {
    }
}
f0(expect, actual = "No Crash", summary);
