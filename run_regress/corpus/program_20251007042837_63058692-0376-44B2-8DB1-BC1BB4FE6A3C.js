g = undefined;
function L() {
}
function h() {
    with (h) {
    }
    for (let i5 = 0; i5 < 10; i5++) {
        try { g(); } catch (e) {}
    }
}
function f(a14) {
    g = a14;
}
f(L);
h();
f(L);
f(2);
h();
