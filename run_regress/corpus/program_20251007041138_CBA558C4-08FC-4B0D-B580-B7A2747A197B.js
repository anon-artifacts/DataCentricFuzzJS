function* f0() {
    yield 1;
    yield 2;
}
const t4 = Array.prototype;
t4[Symbol.iterator] = f0;
class C9 {
    constructor(a11, a12) {
    }
}
class C15 extends C9 {
}
new C15();
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
