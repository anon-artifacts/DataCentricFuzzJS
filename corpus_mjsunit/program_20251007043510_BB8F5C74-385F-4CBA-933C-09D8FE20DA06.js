class C0 {
}
class C1 extends C0 {
    constructor() {
        super();
    }
}
const v5 = {
    get() {
    },
};
const v6 = new Proxy(C0, v5);
var proxy = v6;
const v8 = () => {
    return Reflect.construct(C1, []);
};
v8();
const v13 = () => {
    const v14 = [];
    let v16;
    try { v16 = Reflect.construct(C1, v14, proxy); } catch (e) {}
    return v16;
};
v13();
const v19 = () => {
    const v20 = [];
    let v22;
    try { v22 = Reflect.construct(C1, v20, proxy); } catch (e) {}
    return v22;
};
v19();
const v24 = () => {
    const v25 = [];
    let v27;
    try { v27 = Reflect.construct(C1, v25, proxy); } catch (e) {}
    return v27;
};
v24();
