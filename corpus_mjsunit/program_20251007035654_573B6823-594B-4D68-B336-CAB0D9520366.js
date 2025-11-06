function TestIntToString() {
    for (let i3 = -1000; i3 < 1000; i3++) {
        parseInt("" + i3);
    }
    for (let i15 = -5000000000; i15 < 5000000000; i15 += 1000000 - 1) {
        parseInt("" + i15);
    }
}
TestIntToString();
