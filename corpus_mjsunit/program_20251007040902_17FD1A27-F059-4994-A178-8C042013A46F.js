function f(a1) {
    while (1) {
        s++;
    }
    while (a1) {
        s++;
    }
}
function f7() {
    try { f(1); } catch (e) {}
}
f7();
