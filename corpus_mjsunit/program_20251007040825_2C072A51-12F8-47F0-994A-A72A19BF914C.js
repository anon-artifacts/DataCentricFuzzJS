function test(a1) {
    switch (a1) {
        case 0:
            return 0;
        default:
            return -1;
    }
}
for (let i7 = 0; i7 < 100; i7++) {
    test(-0);
}
