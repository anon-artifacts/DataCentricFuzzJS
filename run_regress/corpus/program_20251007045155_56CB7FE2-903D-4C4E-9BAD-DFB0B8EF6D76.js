function f(a1) {
    return 153;
}
function test() {
    var o = {};
    o.__defineSetter__("q", f);
    o.q = 1;
}
test();
test();
test();
