function f0() {
}
var BUGNUMBER = 355832;
var summary = "execution of let binding nothing";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    actual = "No Crash";
    expect = "No Crash";
    {
        let  = [];
    }
    f0(expect, actual, summary);
}
