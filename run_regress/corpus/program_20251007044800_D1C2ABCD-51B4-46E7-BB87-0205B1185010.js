function change_o() {
    o = { y: 0, x: 1 };
}
var o = { x: 1 };
function f() {
    change_o();
    return o.x;
}
f();
