function f0() {
    function assertEquals(a2, a3, a4) {
    }
    assertEquals = assertEquals;
}
f0();
function testOne(a8, a9, a10) {
    for (let i12 = 0; i12 != 10; i12++) {
        a8[a9]();
    }
}
function TypeOfThis() {
    return typeof this;
}
const t14 = Number.prototype;
t14.type = TypeOfThis;
const t16 = String.prototype;
t16.type = TypeOfThis;
const t18 = Boolean.prototype;
t18.type = TypeOfThis;
testOne(2.3, "type", "object");
testOne("x", "type", "object");
testOne(true, "type", "object");
