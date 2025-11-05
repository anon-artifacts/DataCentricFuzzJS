function f0() {
}
const v2 = Object?.prototype;
const v5 = { writable: false };
try { Object.defineProperty(v2, "prop", v5); } catch (e) {}
class C7 {
    constructor() {
        super.prop = 14;
    }
}
const v10 = () => {
    let v11;
    try { v11 = new C7(); } catch (e) {}
    return v11;
};
try { v10(); } catch (e) {}
const v16 = {
    test() {
        super.prop = 14;
    },
};
try { v16.test(); } catch (e) {}
Object?.prototype?.prop;
if (typeof f0 === "function") {
    try { f0(0, 0, "OK"); } catch (e) {}
}
