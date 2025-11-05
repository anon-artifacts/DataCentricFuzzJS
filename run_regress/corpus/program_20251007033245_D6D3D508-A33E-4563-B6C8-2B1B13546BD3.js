function f() {
    throw 1;
}
function g() {
    try {
        f();
    } catch(e4) {
    }
}
g();
