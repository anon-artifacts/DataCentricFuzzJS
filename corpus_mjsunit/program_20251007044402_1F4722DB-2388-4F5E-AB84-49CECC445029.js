function shouldBe(a1, a2) {
}
var error = null;
let charAt = String.prototype.charAt;
try {
    charAt();
} catch(e10) {
    error = e10;
}
shouldBe(String(error), `TypeError: Type error`);
