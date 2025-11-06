function f0() {
}
var BUGNUMBER = 469547;
var summary = "Do not crash with: for (let [,] of [[], [], null]) {}";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        for (const v18 of [[],[],null]) {
        }
    } catch(e19) {
    }
    f0(expect, actual, summary);
}
