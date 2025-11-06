function f0() {
}
var BUGNUMBER = 465454;
var summary = "TM: do not crash with type-unstable loop";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v17 = -1 / 0;
    const v20 = new String("");
    const v22 = new String("");
    const v27 = -1 / 0;
    const v31 = -1 / 0;
    const v33 = new String("");
    const v35 = new String("");
    for (const v38 of [v17,v20,v22,null,v27,v31,v33,v35,null]) {
        "" + v38;
    }
    f0(expect, actual, summary);
}
