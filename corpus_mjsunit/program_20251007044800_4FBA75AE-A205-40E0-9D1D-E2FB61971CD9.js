function f0() {
}
var BUGNUMBER = 478205;
var summary = "Do not assert: p->isQuad()";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (const v17 of ["",""]) {
        switch ([]) {
        }
    }
    f0(expect, actual, summary);
}
