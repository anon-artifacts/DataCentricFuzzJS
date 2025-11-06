function f0() {
}
var BUGNUMBER = 522123;
var summary = "Indirect eval confuses scope chain";
var actual = "";
var expect = "";
var x = 1;
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = 1;
    evil = eval;
    {
        let x = 2;
        actual = evil("x");
    }
    f0(expect, actual, summary);
}
f0(true, true);
