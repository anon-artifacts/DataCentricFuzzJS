function g() {
    if (false) {
        throw 0;
    }
}
function f() {
    g();
}
f();
f();
f();
