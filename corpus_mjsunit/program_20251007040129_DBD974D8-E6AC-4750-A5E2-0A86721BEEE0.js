function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = new Error(`bad value: ${a1}`);
        throw v6;
    }
}
for (let i9 = -10000; i9 < 10000; ++i9) {
    shouldBe(isFinite(i9), true);
}
for (let i20 = 0; i20 < 10000; ++i20) {
    shouldBe(isFinite(Infinity), false);
    shouldBe(isFinite(-Infinity), false);
    shouldBe(isFinite(NaN), false);
}
for (let i40 = 0; i40 < 10000; ++i40) {
    shouldBe(isFinite("0"), true);
}
shouldBe(isFinite("Hello"), false);
