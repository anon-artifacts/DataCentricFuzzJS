function f() {
    var x = 42;
    while (true) {
        const y = x;
        if (--x == 0) {
            return y;
        }
    }
}
function g() {
    const x = 42;
    return x;
}
for (let i12 = 0; i12 < 5; i12++) {
    f();
    g();
}
f();
g();
function h(a25, a26) {
    var r = a25 + a26;
    const X = 42;
    return r + X;
}
for (let i33 = 0; i33 < 5; i33++) {
    h(1, 2);
}
h(1, 2);
h("foo", 7);
