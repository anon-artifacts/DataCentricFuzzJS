function f0() {
}
class C1 {
    constructor() {
        Object.defineProperty(this, "prop1", { configurable: true, writable: false, value: 1 });
        function f12() {
            return 15;
        }
        Object.defineProperty(this, "prop2", { configurable: true, get: f12 });
        function f18(a19) {
        }
        Object.defineProperty(this, "prop3", { configurable: true, set: f18 });
        function f24() {
            return 20;
        }
        function f26(a27) {
        }
        Object.defineProperty(this, "prop4", { configurable: true, get: f24, set: f26 });
    }
    f1() {
        super.prop1 = 2;
    }
    f2() {
        super.prop2 = 3;
    }
    f3() {
        super.prop3 = 4;
    }
    f4() {
        super.prop4 = 5;
    }
}
const v38 = new C1();
var x = v38;
const v40 = () => {
    let v41;
    try { v41 = x.f1(); } catch (e) {}
    return v41;
};
v40();
x.prop1;
const v46 = () => {
    let v47;
    try { v47 = x.f2(); } catch (e) {}
    return v47;
};
v46();
x.prop2;
const v51 = () => {
    let v52;
    try { v52 = x.f3(); } catch (e) {}
    return v52;
};
v51();
x.prop3;
const v56 = () => {
    let v57;
    try { v57 = x.f4(); } catch (e) {}
    return v57;
};
v56();
x.prop4;
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
