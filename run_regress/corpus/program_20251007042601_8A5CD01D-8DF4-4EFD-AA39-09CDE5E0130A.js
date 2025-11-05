function f(a1, a2) {
    return a1 == a2;
}
f(1.1, 2.2);
for (let i8 = 0; i8 < 5; i8++) {
    f(1, Symbol());
}
