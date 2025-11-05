function f0() {
}
var BUGNUMBER = 465347;
var summary = "Test integer to id in js_Int32ToId";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var o;
    const v17 = new Array();
    o = v17;
    expect = undefined;
    o[4294967295] = "end";
    actual = o[-1];
    f0(expect, actual, summary + ": 1");
    expect = 42;
    o["42"] = 42;
    actual = o[42];
    f0(expect, actual, summary + ": 2");
    const v34 = new Object();
    o = v34;
    expect = undefined;
    o[4294967295] = "end";
    actual = o[-1];
    f0(expect, actual, summary + ": 3");
    expect = 42;
    o["42"] = 42;
    actual = o[42];
    f0(expect, actual, summary + ": 4");
}
