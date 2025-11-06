function f0() {
}
var BUGNUMBER = 458851;
var summary = "TM: for-in loops should not skip every other value sometimes";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function f() {
    var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var x = 0;
    for (let v32 in a) {
        v32 = parseInt(v32);
        x++;
    }
    actual = x;
    f0(x);
}
expect = 16;
f();
f0(expect, actual, summary);
