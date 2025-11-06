function f0() {
}
class C2 extends null {
    constructor() {
        return undefined;
    }
}
for (let i6 = 0; i6 < 1100; i6++) {
    const v12 = () => {
        let v13;
        try { v13 = new C2(); } catch (e) {}
        return v13;
    };
    try { v12(); } catch (e) {}
}
if (typeof f0 === "function") {
    try { f0(0, 0, "OK"); } catch (e) {}
}
