function f() {
}
f();
try {
    f();
    throw 1;
} catch(e4) {
    f();
} finally {
    f();
}
f();
