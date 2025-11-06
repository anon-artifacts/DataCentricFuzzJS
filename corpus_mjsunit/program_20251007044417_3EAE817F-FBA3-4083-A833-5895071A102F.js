let x;
function f(a3) {
    x += a3;
}
function g(a5) {
    f(a5);
    return x;
}
function h(a8) {
    x = a8;
    return x;
}
function boom() {
    return g(1);
}
h(1);
boom();
boom();
boom();
