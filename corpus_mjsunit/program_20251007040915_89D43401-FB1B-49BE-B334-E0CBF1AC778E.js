function f(a1) {
    return ~(~(((a1 = a1 | 0) ? 1e+60 : 1e+60) + 1));
}
var r = -1;
for (let i15 = 0; i15 < 20000; i15++) {
    r = f();
}
