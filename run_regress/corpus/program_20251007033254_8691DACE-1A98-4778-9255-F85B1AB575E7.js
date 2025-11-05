function f(a1) {
    var prop = "arguments";
    f[prop] = f[prop];
}
for (let i6 = 0; i6 < 50; i6++) {
    f();
}
