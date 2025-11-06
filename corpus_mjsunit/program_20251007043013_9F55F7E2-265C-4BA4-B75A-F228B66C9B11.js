function f0() {
}
class C2 extends null {
    constructor() {
    }
}
function intermediate() {
    try { new C2(); } catch (e) {}
}
for (let i7 = 0; i7 < 1100; i7++) {
    try { intermediate(); } catch (e) {}
}
if (typeof f0 === "function") {
    try { f0(0, 0, "OK"); } catch (e) {}
}
