function f0() {
}
var BUGNUMBER = 469937;
var summary = "Properties without DontEnum are sometimes not enumerated";
var actual = false;
var expect = true;
f0(BUGNUMBER);
f0(summary);
function f11() {
    var o = {};
    o.PageLeft = 1;
    o.Rect2 = 6;
    delete o.Rect2;
    for (const v17 in o) {
    }
    o.Rect3 = 7;
    found = false;
    for (const v21 in o) {
        if (v21 == "Rect3") {
            found = true;
        }
    }
    actual = found;
}
f11();
f0(expect, actual, summary);
