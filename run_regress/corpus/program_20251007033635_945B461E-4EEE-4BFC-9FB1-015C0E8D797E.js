function f0() {
}
var BUGNUMBER = 421325;
var summary = "Dense Arrays and holes";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const t8 = Array.prototype;
    t8[1] = "bar";
    var a = [];
    a[0] = "foo";
    a[2] = "baz";
    f0(expect = "foo,bar,baz", actual = a + "", summary);
}
