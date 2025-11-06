function g() {
    throw 42;
}
function f() {
    var a = 1;
    try {
        g();
    } catch(e6) {
        return e6 + a;
    }
}
f();
f();
f();
