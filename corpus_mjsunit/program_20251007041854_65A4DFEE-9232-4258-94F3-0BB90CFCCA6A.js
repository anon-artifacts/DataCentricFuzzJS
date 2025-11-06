function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
var called = null;
class C10 {
    constructor() {
        called = "B";
    }
}
class C13 extends C10 {
}
function F() {
    called = "F";
}
const t17 = C10.prototype;
t17.constructor = F;
new C13();
shouldBe(called, "B");
