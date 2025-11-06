function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
shouldBe(RegExp.prototype.hasOwnProperty("exec"), true);
const t6 = RegExp.prototype;
shouldBe(delete t6.exec, true);
shouldBe(RegExp.prototype.hasOwnProperty("exec"), false);
const t8 = RegExp.prototype;
shouldBe(delete t8.exec, true);
shouldBe(RegExp.prototype.hasOwnProperty("exec"), false);
