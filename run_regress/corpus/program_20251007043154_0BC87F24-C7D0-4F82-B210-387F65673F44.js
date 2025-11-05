function f(a1) {
    return f.caller;
}
function g(a4) {
    return f(a4);
}
function gg(a7) {
    return f.call(a7, a7);
}
const t9 = g({});
t9();
g();
function f13() {
}
actual = gg(f13);
gg();
