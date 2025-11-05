function f(a1) {
    if (a1.y()) {
    }
}
function f3() {
}
f({ y: f3 });
try {
    f(10);
} catch(e10) {
    e10 instanceof TypeError;
}
