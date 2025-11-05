function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
shouldBe((17592186044415).toString(16), `fffffffffff`);
shouldBe((-17592186044415).toString(16), `-fffffffffff`);
shouldBe((72057594037923840).toString(16), `fffffffffff000`);
shouldBe((-72057594037923840).toString(16), `-fffffffffff000`);
shouldBe((2251799813685248).toString(16), `8000000000000`);
shouldBe((-2251799813685248).toString(16), `-8000000000000`);
shouldBe((2251799813685248 - 1).toString(16), `7ffffffffffff`);
shouldBe((-2251799813685248 + 1).toString(16), `-7ffffffffffff`);
