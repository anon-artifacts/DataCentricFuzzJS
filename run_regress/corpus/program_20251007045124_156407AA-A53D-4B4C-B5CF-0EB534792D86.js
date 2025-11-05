var a = [];
for (let i4 = -20; i4 < 0; ++i4) {
    a[i4] = 0;
}
function g() {
    ([]).push.apply(a, arguments);
}
function f() {
    g();
}
g();
g();
f();
