function lazyDeopt() {
    return "deopt";
}
var x = { toString: lazyDeopt };
function g(a5) {
    return "result";
}
function test(a8) {
    return g(void (a8 == ""));
}
test(x);
test(x);
