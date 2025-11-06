function g(a1) {
    if (a1) {
        return arguments;
    }
    return 23;
}
function f() {
    return g(false);
}
f();
f();
f();
