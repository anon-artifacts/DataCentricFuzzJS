var g;
function h() {
    return arguments.length;
}
function f() {
    var args = arguments;
    function f8() {
        return h.apply(this, args);
    }
    g = f8;
}
for (let i12 = 0; i12 < 10; ++i12) {
    f();
}
g();
