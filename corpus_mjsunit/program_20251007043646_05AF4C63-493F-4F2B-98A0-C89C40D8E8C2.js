function f0() {
}
f0();
function f2(a3) {
    return a3 != "test";
}
var st = "st";
function f8(a9) {
    a9 == ("te" + st);
}
function f13(a14) {
    var st = "st";
    "te" + st;
}
function f19() {
    f2("test");
    f2("foobar");
    f8("test");
    f8("foobar");
    f13();
    f13();
}
for (let i29 = 0; i29 < 100000; i29++) {
    f19();
}
