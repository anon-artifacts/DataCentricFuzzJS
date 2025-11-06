function f0() {
}
class C1 {
    constructor() {
    }
}
function lies() {
}
lies.prototype = 4;
const v5 = () => {
    const v6 = [];
    let v8;
    try { v8 = Reflect.consruct(C1, v6, lies); } catch (e) {}
    return v8;
};
v5();
function get(a12, a13, a14) {
    if (a13 === "prototype") {
        return 42;
    }
    let v19;
    try { v19 = Reflect.get(a12, a13, a14); } catch (e) {}
    return v19;
}
class C20 extends C1 {
    constructor() {
        super();
    }
}
const v22 = () => {
    const v25 = new Proxy(C20, { get: get });
    let v26;
    try { v26 = new v25(); } catch (e) {}
    return v26;
};
v22();
class C28 extends C1 {
}
const v29 = () => {
    const v32 = new Proxy(C28, { get: get });
    let v33;
    try { v33 = new v32(); } catch (e) {}
    return v33;
};
v29();
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
