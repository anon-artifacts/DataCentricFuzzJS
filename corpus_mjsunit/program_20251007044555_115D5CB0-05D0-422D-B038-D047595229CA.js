function f0(a1) {
    return a1;
}
var o = { g: f0 };
function f() {
    var z;
    for (let i8 = 0; i8 < 10; ++i8) {
        z = o.g(i8);
    }
}
f();
