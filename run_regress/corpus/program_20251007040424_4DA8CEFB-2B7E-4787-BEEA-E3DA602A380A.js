function f() {
    g();
}
function g() {
}
function a() {
    b();
}
function b() {
}
f();
f();
a();
a();
for (let i13 = 0; i13 < 5; i13++) {
    f();
    a();
}
