function f0() {
}
var BUGNUMBER = 462388;
var summary = "Do not assert: JSVAL_TAG(v) == JSVAL_STRING";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var c = 0;
    var v;
    for (const v20 of ["",v,v,v]) {
        for ((() => {
                c = 0;
            })();
            c < 4;
            ++c) {
        }
    }
    f0(expect, actual, summary);
}
