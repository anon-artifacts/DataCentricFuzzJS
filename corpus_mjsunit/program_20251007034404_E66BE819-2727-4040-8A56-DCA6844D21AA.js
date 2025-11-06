function f0() {
}
function* f(a2, a3, a4, a5) {
    yield arguments.length;
}
f0(0, f().next().value, "bug 530879");
