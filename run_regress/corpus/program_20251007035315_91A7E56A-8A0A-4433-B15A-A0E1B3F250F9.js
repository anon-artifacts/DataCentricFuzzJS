function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
shouldBe(unescape("%0"), "%0");
shouldBe(unescape("%a"), "%a");
