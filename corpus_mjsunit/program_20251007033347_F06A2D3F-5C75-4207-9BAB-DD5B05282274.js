function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = new Error(`bad value: ${a1}`);
        throw v6;
    }
}
for (let i9 = -10000; i9 < 10000; ++i9) {
    shouldBe(isNaN(i9), false);
}
for (let i20 = 0; i20 < 10000; ++i20) {
    shouldBe(isNaN(Infinity), false);
    shouldBe(isNaN(-Infinity), false);
    shouldBe(isNaN(NaN), true);
}
for (let i40 = 0; i40 < 10000; ++i40) {
    shouldBe(isNaN("0"), false);
}
shouldBe(isNaN("Hello"), true);
shouldBe(isNaN("NaN"), true);
