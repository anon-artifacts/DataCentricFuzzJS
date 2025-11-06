function test(a1) {
    Math.sin((a1 / 1779) * Math.PI);
    Math.sin(0);
}
for (i = 0; i < 10000; ++i) {
    test(i);
}
