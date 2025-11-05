function f0() {
}
class C2 extends null {
    constructor() {
    }
}
for (let i7 = 0; i7 < 1100; i7++) {
    const v13 = () => {
        let v14;
        try { v14 = new C2(); } catch (e) {}
        return v14;
    };
    try { v13(); } catch (e) {}
}
if (typeof f0 === "function") {
    try { f0(0, 0, "OK"); } catch (e) {}
}
