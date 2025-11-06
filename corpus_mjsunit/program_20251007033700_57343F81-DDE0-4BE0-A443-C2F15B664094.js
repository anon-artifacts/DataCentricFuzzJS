function f() {
    f = 42;
    return typeof f;
}
f();
function* g() {
    g = 42;
    yield typeof g;
}
g().next().value;
