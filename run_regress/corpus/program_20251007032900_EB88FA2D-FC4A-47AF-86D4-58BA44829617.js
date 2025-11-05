function f(a1) {
    return 1 / Math.min(1, a1);
}
for (let i8 = 0; i8 < 5; ++i8) {
    f(1);
}
-Infinity;
f(-0);
