function f0() {
}
var BUGNUMBER = 367501;
var summary = "getter/setter issues";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        expect = "undefined";
        const v17 = {
            set x(a16) {
            },
        };
        var a = v17;
        actual = a.x + "";
    } catch(e22) {
    }
    f0(expect, actual, summary);
}
