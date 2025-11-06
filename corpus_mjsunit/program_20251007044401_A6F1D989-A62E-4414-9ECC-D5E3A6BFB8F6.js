function f0() {
}
function f() {
}
function f2() {
}
f.p = f2;
Object.freeze(f);
f.p;
f0(0, 0, "ok");
