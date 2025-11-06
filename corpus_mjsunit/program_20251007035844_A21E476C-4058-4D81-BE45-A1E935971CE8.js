function f0() {
}
var BUGNUMBER = 419018;
var summary = "UMR in JSENUMERATE_INIT";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("This test must be run under valgrind to check if an UMR occurs in slowarray_enumerate");
    try {
        function parse() {
            var a = [];
            a["b"] = 1;
            return a;
        }
        var x = parse("");
        for (const v24 in x) {
            c[v24];
        }
    } catch(e27) {
    }
    f0(expect, actual, summary);
}
