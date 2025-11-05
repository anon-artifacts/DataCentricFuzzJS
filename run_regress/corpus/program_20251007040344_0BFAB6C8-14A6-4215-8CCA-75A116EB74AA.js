var b = false;
function change_o() {
    if (b) {
        o = { y: 1, x: 0 };
    }
}
var o = { x: 1 };
function f() {
    change_o();
    return o.x;
}
f();
f();
b = true;
f();
