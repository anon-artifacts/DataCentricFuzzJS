function f0(a1, a2) {
}
var f = { apply: f0 };
function test(a6) {
    f.apply(this, arguments);
}
test(1);
test(1);
test(1);
