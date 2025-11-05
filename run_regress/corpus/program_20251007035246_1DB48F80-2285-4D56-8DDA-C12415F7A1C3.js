var G = 42;
function f() {
    var v = G;
    var w = v >> 0;
    return w;
}
for (let i8 = 0; i8 < 10000; i8++) {
    f();
}
f();
G = 2000000000;
f();
