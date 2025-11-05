function f() {
}
function g(a2) {
    f();
    return h(a2);
}
function h(a7) {
    return a7.x;
}
g({ x: 1 });
g({ x: 2 });
g({ x: 3 });
g({ y: 1, x: 3 });
