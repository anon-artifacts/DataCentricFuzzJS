function f0() {
}
var o = {};
for (let i4 = 0; i4 <= 50; i4++) {
    o[i4] = i4;
}
Object.defineProperty(o, "51", { get: f0 });
var threw = 0;
function g(a17, a18) {
    try {
        a17[a18];
    } catch(e20) {
        threw++;
    }
}
function f() {
    for (let i24 = 0; i24 <= 51; i24++) {
        g(o, i24);
    }
}
f();
f();
f();
