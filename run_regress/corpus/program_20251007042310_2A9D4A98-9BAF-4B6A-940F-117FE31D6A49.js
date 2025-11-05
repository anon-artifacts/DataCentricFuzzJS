function f0() {
}
class C1 {
    constructor() {
    }
}
class C3 extends C1 {
    constructor() {
        super();
    }
}
Object.setPrototypeOf(C3, Math.sin);
const v9 = () => {
    let v10;
    try { v10 = new C3(); } catch (e) {}
    return v10;
};
v9();
class C13 extends C1 {
}
Object.setPrototypeOf(C3, Math.sin);
const v16 = () => {
    let v17;
    try { v17 = new C3(); } catch (e) {}
    return v17;
};
v16();
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
