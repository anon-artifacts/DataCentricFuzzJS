function f0() {
}
var BUGNUMBER = 419152;
var summary = "Shaver can not contain himself";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var a = [1,2,3];
    a[5] = 6;
    expect = "1,2,3,,,6:6";
    actual = (a + ":") + a.length;
    f0(expect, actual, summary + ": 1");
    a = [1,2,3,4];
    expect = "undefined";
    actual = a[-1] + "";
    f0(expect, actual, summary + ": 2");
    a = [1,2,3];
    a[-1] = 55;
    expect = 3;
    actual = a.length;
    f0(expect, actual, summary + ": 3");
    expect = "1,2,3";
    actual = a + "";
    f0(expect, actual, summary + ": 4");
    expect = 55;
    actual = a[-1];
    f0(expect, actual, summary + ": 5");
    var s = "abcdef";
    expect = "undefined";
    actual = s[-2] + "";
    f0(expect, actual, summary + ": 6");
}
