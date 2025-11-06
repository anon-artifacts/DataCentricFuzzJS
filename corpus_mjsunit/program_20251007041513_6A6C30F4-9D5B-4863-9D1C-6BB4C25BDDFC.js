function g(a1) {
    return a1.f(0, 1, 2);
}
function f(a7, a8, a9) {
    return 42;
}
var object = {};
object.f = f;
for (let i14 = 0; i14 < 5; i14++) {
    g(object);
}
g(object);
function f23(a24, a25, a26) {
    return 87;
}
object.f = f23;
g(object);
