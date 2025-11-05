function f0() {
}
var BUGNUMBER = 471197;
var summary = "Do not crash when cx->thread is null";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var results;
    function f() {
        for (let i18 = 0; i18 != 1000; ++i18) {
        }
    }
    if (typeof scatter == "function") {
        results = scatter([f,f]);
    } else {
        f0("Test skipped due to lack of scatter threadsafe function");
    }
    f0(expect, actual, summary);
}
