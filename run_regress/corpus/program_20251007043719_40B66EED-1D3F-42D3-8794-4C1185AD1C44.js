function f() {
    try {
    } catch(e1) {
        return;
    } finally {
        null.x;
    }
}
try {
    f();
} catch(e5) {
}
