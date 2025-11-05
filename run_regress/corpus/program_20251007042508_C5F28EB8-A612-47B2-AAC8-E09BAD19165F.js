function f0() {
}
var BUGNUMBER = 419091;
var summary = "Do not assert: JS_PROPERTY_CACHE(cx).disabled >= 0";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof scatter == "undefined") {
        actual = "Test skipped. Requires scatter.";
        expect = "Test skipped. Requires scatter.";
        f0("Test skipped. Requires scatter.");
    } else {
        if (typeof gczeal == "undefined") {
            function f24() {
            }
            gczeal = f24;
        }
        gczeal(2);
        function f() {
            for (let i29 = 0; i29 < 10; i29++) {
                let y = { x: i29 };
            }
        }
        for (let i38 = 0; i38 < 10; i38++) {
            scatter([f,f]);
        }
        gczeal(0);
    }
    f0(expect, actual, summary);
}
